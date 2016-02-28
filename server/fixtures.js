if ( Posts.find().count() === 0 ) {

  Posts.insert({
    title: 'Meteor Framework',
      url: 'https://www.meteor.com/'
  });

  Posts.insert({
    title: 'The Meteor Book UA',
    url: 'http://uk.discovermeteor.com/'
  });

  Posts.insert({
    title: 'The QA Skills',
    url: 'http://qa-skills.meteor.com/'
  });
}