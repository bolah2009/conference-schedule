# frozen_string_literal: true

class AddCreatorIdToConferences < ActiveRecord::Migration[6.0]
  def change
    add_column :conferences, :creator_id, :integer
  end
end
