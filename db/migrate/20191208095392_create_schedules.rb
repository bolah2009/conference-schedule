# frozen_string_literal: true

class CreateSchedules < ActiveRecord::Migration[6.0]
  def change
    create_table :schedules do |t|
      t.integer :user_id
      t.integer :agenda_id

      t.timestamps
    end
  end
end
