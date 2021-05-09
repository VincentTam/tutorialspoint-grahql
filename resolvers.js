const db = require('./db');
const Query = {
  test: () => 'Test Success, GraphQL server is up & running !!',
  students: () => db.students.list(),
  studentById: (root,args,context,info) => db.students.get(args.id)
};
const Student = {
  fullName: (root,args,context,info) => root.firstName + ":" + root.lastName,
  college: (root) => db.colleges.get(root.collegeId)
}
module.exports = {Query, Student};
