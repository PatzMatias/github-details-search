class Organization {
  constructor(json) {
    this.id = json.id;
    this.login = json.login;
    this.avatarUrl = json.avatar_url;
    this.description = json.description;
    this.htmlUrl = `https://github.com/${json.login}`
  }
};

export default Organization;
