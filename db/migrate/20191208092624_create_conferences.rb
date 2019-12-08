# frozen_string_literal: true

class CreateConferences < ActiveRecord::Migration[6.0]
  def change
    create_table :conferences do |t|
      t.string :name
      t.string :url
      t.string :city
      t.string :country
      t.date :startDate
      t.date :endDate

      t.timestamps
    end
  end
end
