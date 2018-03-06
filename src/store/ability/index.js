const casl = require('casl');

module.exports = function defineAbilitiesFor(type) {
  return casl.AbilityBuilder.define(
    can => {
      switch(type) {
	      case 'guest':
	        can('read', 'Post');
	        break;
	      case 'administrator':
	        can('read', 'Post');
	        can(['update', 'delete'], 'Post');
	        break;
	      default:
	        can('read', 'Post');
	        break;
	      // Add more roles here
	    }
    }
  );
};