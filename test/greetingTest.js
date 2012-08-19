require([
  'greeting'
], function(
  greeting
) {

  TestCase('greetingTest', {

    testMessageshouldBeDefined: function() {
      assertNotUndefined('greeting.message should be defined', greeting.message);
    },

    testMessageShouldGreetTheWorld: function() {
      assertEquals('greeting.message should greet the world', 'Hello world!', greeting.message);
    }

  });

});
