class MappingSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :id
  has_many :questions
end
