# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Conference, type: :model do
  it { is_expected.to belong_to(:user).with_foreign_key(:creator_id) }
  it { is_expected.to have_many(:agendas).dependent(:destroy) }

  it { is_expected.to validate_presence_of(:name) }
  it { is_expected.to validate_presence_of(:creator_id) }
  it { is_expected.to validate_presence_of(:url) }
  it { is_expected.to validate_presence_of(:startDate) }
  it { is_expected.to validate_presence_of(:endDate) }
  it { is_expected.to validate_presence_of(:city) }
  it { is_expected.to validate_presence_of(:country) }
end
