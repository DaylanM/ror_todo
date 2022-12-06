List.delete_all

10.times do
  List.create(
    title: Faker::Restaurant.name,
    desc: Faker::Restaurant.description,
  )
end
