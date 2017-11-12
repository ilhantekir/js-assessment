asyncAnswers = {
  /**
   * Asynchronously returns a value via a promise. Example:
   * async('anyValue').then((result) => { return result === 'anyValue';});
   * 
   * @param value - Any value
   * @returns {then: function} A promise like object containing a then property.
   */
  async: function async(value) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(value);
      }, 20);
    });
  },

  /**
   * Creates a promise that resolves with the data returned from an ajax call to the url url.
   * You may use jquery, XMLHttpRequest, or fetch.
   * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
   * https://api.jquery.com/jQuery.ajax/
   * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API   * 
   * 
   * @param {String} url - a valid url
   * @returns {then: function} A promise like object containing a then property.
   */
  manipulateRemoteData: function manipulateRemoteData(url) {
    return new Promise(((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.onload = function () {
        if (xhr.status === 200) resolve(xhr.response);
        else reject(Error(xhr.statusText));
      };
      xhr.send();
    })).then((response) => {
      const data = JSON.parse(response).people;
      return data.map(key => key.name).sort();
    });
  },
  
};
