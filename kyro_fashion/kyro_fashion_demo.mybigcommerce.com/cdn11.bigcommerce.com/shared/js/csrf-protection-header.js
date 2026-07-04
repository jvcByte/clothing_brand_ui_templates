/*jshint esversion: 6 */
(function () {
  if (window._bcCsrfProtectionPatched) {
    return;
  }

  window._bcCsrfProtectionPatched = true;

  var CSRF_TOKEN_HEADER = "X-XSRF-TOKEN";
  var CSRF_TOKEN_COOKIE = "XSRF-TOKEN";
  var SF_CSRF_TOKEN_HEADER = "X-SF-CSRF-TOKEN";
  var SF_CSRF_TOKEN_COOKIE = "SF-CSRF-TOKEN";

  function getToken(cookieName = CSRF_TOKEN_COOKIE) {
    var cookies = document.cookie.split("; ");

    for (var i = 0; i < cookies.length; i++) {
      var parts = cookies[i].split("=");
      var name = parts[0];
      var value = parts[1];

      if (cookieName === name) {
        return value;
      }
    }

    return "";
  }

  function isLocalRequest(url) {
    if (url.match(new RegExp("^(https?:)?//" + window.location.hostname))) {
      return true;
    }

    return !url.match(new RegExp("^(https?:)?//"));
  }

  function isAssetRequest(method, url) {
    if (method && method.toUpperCase() !== "GET") {
      return false;
    }

    return /\.(png|gif|jpe?g|css|js|json|svg|html?)$/.test(url.split("?")[0]);
  }

  function isWhiteListed(action, whitelist) {
    for (var i = 0; i < whitelist.length; i++) {
      if (action && action.match(whitelist[i])) {
        return true;
      }
    }

    return false;
  }

  function patchRequestHeaders(requestOrOptions) {
    requestOrOptions.headers = requestOrOptions.headers || {};

    var csrfTokenValue = getToken();
    var sfCsrfTokenValue = getToken(SF_CSRF_TOKEN_COOKIE);

    if (requestOrOptions.headers.append) {
      if (csrfTokenValue) {
        requestOrOptions.headers.delete(CSRF_TOKEN_HEADER);
        requestOrOptions.headers.append(CSRF_TOKEN_HEADER, csrfTokenValue);
      }

      if (sfCsrfTokenValue) {
        requestOrOptions.headers.delete(SF_CSRF_TOKEN_HEADER);
        requestOrOptions.headers.append(SF_CSRF_TOKEN_HEADER, sfCsrfTokenValue);
      }
    } else {
      if (csrfTokenValue) {
        requestOrOptions.headers[CSRF_TOKEN_HEADER] = csrfTokenValue;
      }

      if (sfCsrfTokenValue) {
        requestOrOptions.headers[SF_CSRF_TOKEN_HEADER] = sfCsrfTokenValue;
      }
    }
  }

  function getUrl(urlOrURL) {
    if (urlOrURL instanceof window.URL) {
      return urlOrURL.href;
    }

    return urlOrURL;
  }

  var xmlHttpRequestPrototype = Object.getPrototypeOf(
    new window.XMLHttpRequest()
  );
  var open = xmlHttpRequestPrototype.open;
  var send = xmlHttpRequestPrototype.send;
  var setRequestHeader = xmlHttpRequestPrototype.setRequestHeader;

  xmlHttpRequestPrototype.open = function () {
    const url = getUrl(arguments[1]);
    this._isLocalRequest = isLocalRequest(url);
    this._isAssetRequest = isAssetRequest(arguments[0], url);

    return open.apply(this, arguments);
  };

  xmlHttpRequestPrototype.send = function () {
    if (this._isLocalRequest && !this._isAssetRequest) {
      var csrfTokenValue = getToken();
      var sfCsrfTokenValue = getToken(SF_CSRF_TOKEN_COOKIE);

      if (csrfTokenValue && !this._hasCsrfToken) {
        this.setRequestHeader(CSRF_TOKEN_HEADER, csrfTokenValue);
      }

      if (sfCsrfTokenValue && !this._hasSfCsrfToken) {
        this.setRequestHeader(SF_CSRF_TOKEN_HEADER, sfCsrfTokenValue);
      }
    }

    return send.apply(this, arguments);
  };

  xmlHttpRequestPrototype.setRequestHeader = function () {
    if (CSRF_TOKEN_HEADER === arguments[0] && arguments[1]) {
      this._hasCsrfToken = true;
    }

    if (SF_CSRF_TOKEN_HEADER === arguments[0] && arguments[1]) {
      this._hasSfCsrfToken = true;
    }

    return setRequestHeader.apply(this, arguments);
  };

  function handleSubmit(event) {
    var action = event.target.getAttribute("action");

    if (action != null && isWhiteListed(action, whiteListActions)) {
      event.target.method = "POST";
    }

    var bcappCsrfTokenElement = event.target.querySelector(
      'input[name="authenticity_token"]'
    );
    var sfCsrfTokenElement = event.target.querySelector(
      'input[name="sf_authenticity_token"]'
    );

    if (bcappCsrfTokenElement && sfCsrfTokenElement) {
      return;
    }

    if (event.target.method.toLowerCase() !== "post") {
      return;
    }

    if (bcappCsrfTokenElement == null) {
      var csrfInput = document.createElement("input");
      csrfInput.setAttribute("type", "hidden");
      csrfInput.setAttribute("name", "authenticity_token");
      csrfInput.setAttribute("value", getToken());
      event.target.appendChild(csrfInput);
    }

    if (sfCsrfTokenElement == null) {
      var sfCsrfInput = document.createElement("input");
      sfCsrfInput.setAttribute("type", "hidden");
      sfCsrfInput.setAttribute("name", "sf_authenticity_token");
      sfCsrfInput.setAttribute("value", getToken(SF_CSRF_TOKEN_COOKIE));
      event.target.appendChild(sfCsrfInput);
    }
  }

  if (window.$ && window.$.fn && window.$.fn.jquery) {
    $(document).submit(handleSubmit);
  } else {
    document.addEventListener("submit", handleSubmit);
  }

  if (window.fetch) {
    var _fetch = window.fetch;

    window.fetch = function (urlOrRequest, options) {
      if (window.Request) {
        var request = new Request(urlOrRequest, options);
        if (
          isLocalRequest(request.url) &&
          !isAssetRequest(request.method, request.url)
        ) {
          patchRequestHeaders(request);
        }
        return _fetch(request);
      }

      var url = getUrl(urlOrRequest);
      var opt = options || {};

      if (isLocalRequest(url) && !isAssetRequest(opt.method, url)) {
        patchRequestHeaders(opt);
      }

      return _fetch(url, opt);
    };
  }

  var whiteListActions = [
    new RegExp("^" + window.location.origin + "/wishlist.php"),
    new RegExp("^/?wishlist.php"),
  ];
})();
