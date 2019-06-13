class Repo {
  constructor(json) {
    this.id = json.id;
    this.name = json.name;
    this.private = json.private;
    this.htmlUrl = json.html_url;
    this.description = json.description;
    this.fork = json.fork;
    this.cloneUrl = json.clone_url;
    this.forksCount = json.forks_count;
    this.watchersCount = json.watchers_count;
    this.createdAt = json.created_at;
    this.updatedAt = json.updated_at;
  }
};

export default Repo;