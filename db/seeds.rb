# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Role.create(name: "Admin")
Role.create(name: "User")
mapping = Mapping.create(name: "Collaboration")


question1 = Question.create(
	content: "How would you rate the team's collaboration?",
	teaming_stages: "Norming",
	appears_day: 1,
	frequency: 60,
	qtype: "Rating Scale",
	required: true,
	conditions: "Always"
	)

question2 = Question.create(
	content: "How would you rate the team's engagement?",
	teaming_stages: "Forming",
	appears_day: 3,
	frequency: 60,
	qtype: "Rating Scale",
	required: true,
	conditions: "Always"
	)
mapping.questions <<  question1
mapping.questions <<  question2



