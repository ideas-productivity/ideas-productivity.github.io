module Jekyll
  module Algolia
    module Hooks
      def self.should_be_excluded?(filepath)
        return true if filepath =~ %r{internal|events-draft|events-hpcbp}
        false
      end
    end
  end
end
