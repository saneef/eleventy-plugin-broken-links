class ExternalLink {
  constructor() {
    this.pages = new Set();
    this.linkCount = 0;
    this.httpStatusCode = null;
  }

  incrementLinkCount() {
    this.linkCount++;
    return this.linkCount;
  }

  getLinkCount() {
    return this.linkCount;
  }

  addPage(page) {
    this.pages.add(page);
  }

  getPages() {
    return Array.from(this.pages);
  }

  setHttpStatusCode(code) {
    this.httpStatusCode = (code || "").toString();
  }

  getHttpStatusCode() {
    return this.httpStatusCode;
  }
}

module.exports = ExternalLink;
