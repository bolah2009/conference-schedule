# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Schedule, type: :model do
  it { is_expected.to belong_to(:agenda).with_foreign_key(:agenda_id) }
  it { is_expected.to belong_to(:user).with_foreign_key(:user_id) }

  it { is_expected.to validate_presence_of(:user_id) }
  it { is_expected.to validate_presence_of(:agenda_id) }

  it { is_expected.to validate_uniqueness_of(:agenda_id).scoped_to(:user_id) }
end
