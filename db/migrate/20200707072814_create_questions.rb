class CreateQuestions < ActiveRecord::Migration[6.0]
  def change
    create_table :questions do |t|
      t.integer :pri
      t.text :content
      t.string :teaming_stages
      t.integer :appears_day
      t.integer :frequency
      t.string :qtype
      t.boolean :required
      t.string :conditions
      t.belongs_to :mapping, null: false, foreign_key: true

      t.timestamps
    end
  end
end
