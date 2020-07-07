class RoleSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :id
end
