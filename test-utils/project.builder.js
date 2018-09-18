const random = require('charlatan');

class ProjectBuilder {
  static random_project_info () {
    const info = {
      version:     random.App.version(),
      description: random.Lorem.sentence(),
      author:      random.Name.name()
    };

    this.add_keywords(info);

    return info;
  }

  static random_keywords () {
    const keywords = [];

    for (let i = 0; i < random.Number.between(2, 5); ++i) {
      keywords.push(random.Lorem.word());
    }

    return keywords;
  }

  static add_keywords (info) {
    info.keywords_as_array = this.random_keywords();

    info.keywords = info.keywords_as_array.join(', ');
  }
}

module.exports = ProjectBuilder;
