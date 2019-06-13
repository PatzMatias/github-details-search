class User {
  constructor(json) {
    this.login = json.login;
    this.id = json.id;
    this.avatarUrl = json.avatar_url;
    this.gravatarId = json.gravatar_id;
    this.url = json.url;
    this.htmlUrl = json.html_url;
    this.subscriptionsUrl = json.subscriptions_url;
    this.organizationsUrl = json.organizations_url;
    this.reposUrl = json.repos_url;
    this.type = json.type;
    this.name = json.name;
    this.company = json.company;
    this.blog = json.blog;
    this.location = json.location;
    this.email = json.email;
    this.bio = json.bio;
    this.public_repos = json.public_repos;
    this.followers = json.followers;
    this.following = json.following;
    this.createdAt = json.created_at;
  }
}

export default User;