class CreateAgendas < ActiveRecord::Migration[6.0]
  def change
    create_table :agendas do |t|
      t.string :title
      t.string :description
      t.string :location
      t.datetime :startTime
      t.datetime :endTime
      t.references :conference, null: false, foreign_key: true

      t.timestamps
    end
  end
end
