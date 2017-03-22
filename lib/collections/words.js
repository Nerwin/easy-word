WordsList = new Ground.Collection('WordsList');

WordsList.allow({
    insert: function(userId, doc){
        return true;
    },
    update: function(userId, doc){
        return true;
    }
});