# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Schedule, type: :model do
  it { is_expected.to belong_to(:agenda).with_foreign_key(:agenda_id).dependent(:destroy) }
  it { is_expected.to belong_to(:user).with_foreign_key(:user_id).dependent(:destroy) }

  it { is_expected.to validate_presence_of(:user_id) }
  it { is_expected.to validate_presence_of(:agenda_id) }

  it { is_expected.to validate_uniqueness_of(:agenda_id) }

  describe '#take_agendas' do
    subject { described_class.take_agendas }

    before { create(:schedule) }

    it { is_expected.to be_kind_of(Array) }
  end
end
