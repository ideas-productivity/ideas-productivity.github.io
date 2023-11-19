module Jekyll
  class Md2mdConverter < Converter

  # This is essentially a null converter.  It is intended for Markdown
  # files that we want to keep in Markdown, but we want all the Liquid
  # to be processed.

    safe true
    priority :low

    def matches(ext)
      ext =~ /^\.mdmd$/i
    end

    def output_ext(ext)
      ".md"
    end

    def convert(content)
      content
    end
  end
end
