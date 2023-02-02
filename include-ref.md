<!-- 

TEXT, BIG LINK

-------------------------------------------------------------------------------

Large text link for use as a call to action in extended text

available parameters:
* blurb
* url

* required

-------------------------------------------------------------------------------

-->

{% 	include text-pullquote.html 
		blurb = "Do this thing"
		url = "www.link.com"
%}




<!-- 

TEXT, DOWNLOAD

-------------------------------------------------------------------------------

Highlight downloadable files anad provide relevant info.

available parameters:
* title
- blurb
* url
* file-type
* file-size

* required

-------------------------------------------------------------------------------

-->

{%  include text-download.html
    title = "Title"
    blurb = "The quick brown fox jumps over the lazy dog."
    url = "www.link.com"
    file-type = "PDF"
    file-size = "50 kb"
%}




<!-- 

TEXT, PULL QUOTE

-------------------------------------------------------------------------------

Large pull-quote style for use in extended text

available parameters:
* blurb

* required

-------------------------------------------------------------------------------

-->

{% 	include text-pullquote.html 
		blurb = "The quick brown fox jumps over the lazy dog."
%}




<!-- 

TEASERS, TEXT

-------------------------------------------------------------------------------

More of a call-out that share's a lot in common with the teasers. Created to go in-depth on a specific content such as inclusivity on the home page.

available parameters:
- group-title
- group-linktext
- group-linkurl
* lgtext
* smtext

* required

-------------------------------------------------------------------------------

-->

{% 	include text-pullquote.html 
	  group-title = "Title"
	  group-linktext = "learn more"
	  group-linkurl = "www.link.com"
		lgtext = "The quick brown fox jumps over the lazy dog."
		smtext = "The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog."
%}




<!-- 

TEASERS, BANNER

-------------------------------------------------------------------------------

Large clickable banner to highlight important content

available parameters:
- group-title
- group-linktext
- group-linkurl
- group-blurb
* title
* source
* url
- blurb

* required

-------------------------------------------------------------------------------

-->

{% 	include teasers-banner.html 
	  group-title = "Title"
	  group-linktext = "learn more"
	  group-linkurl = "www.link.com"
		group-blurb = "The quick brown fox jumps over the lazy dog."
		title = "title"
		source = "fpo.png"
		url = "www.link.com"
		blurb = "The quick brown fox jumps over the lazy dog."
%}




<!-- 

TEASERS, NO IMAGE 4x

-------------------------------------------------------------------------------

Teaser group with no images that displays four across for use on landing pages and for related content below extended text

available parameters:
- group-title
- group-linktext
- group-linkurl
- group-blurb
* title1
* url1
- blurb1
* title2
* url2
- blurb2
* title3
* url3
- blurb3
* title4
* url4
- blurb4

* required

-------------------------------------------------------------------------------

-->

{% 	include teasers-banner.html 
	  group-title = "Title"
	  group-linktext = "learn more"
	  group-linkurl = "www.link.com"
		group-blurb = "The quick brown fox jumps over the lazy dog."
		title1 = "title"
		url1 = "www.link.com"
		blurb1 = "The quick brown fox jumps over the lazy dog."
		title2 = "title"
		url2 = "www.link.com"
		blurb2 = "The quick brown fox jumps over the lazy dog."
		title3 = "title"
		url3 = "www.link.com"
		blurb3 = "The quick brown fox jumps over the lazy dog."
		title4 = "title"
		url4 = "www.link.com"
		blurb4 = "The quick brown fox jumps over the lazy dog."
%}




<!-- 

TEASERS, IMAGE 4x

-------------------------------------------------------------------------------

Teaser group including images that displays four across for use on landing pages and for related content below extended text

available parameters:
- group-title
- group-linktext
- group-linkurl
- group-blurb
* title1
* source1
* url1
- blurb1
* title2
* source2
* url2
- blurb2
* title3
* source3
* url3
- blurb3
* title4
* source4
* url4
- blurb4

* required

-------------------------------------------------------------------------------

-->

{% 	include teasers-banner.html 
	  group-title = "Title"
	  group-linktext = "learn more"
	  group-linkurl = "www.link.com"
		group-blurb = "The quick brown fox jumps over the lazy dog."
		title1 = "title"
		source1 = "fpo.png"
		url1 = "www.link.com"
		blurb1 = "The quick brown fox jumps over the lazy dog."
		title2 = "title"
		source2 = "fpo.png"
		url2 = "www.link.com"
		blurb2 = "The quick brown fox jumps over the lazy dog."
		title3 = "title"
		source3 = "fpo.png"
		url3 = "www.link.com"
		blurb3 = "The quick brown fox jumps over the lazy dog."
		title4 = "title"
		source4 = "fpo.png"
		url4 = "www.link.com"
		blurb4 = "The quick brown fox jumps over the lazy dog."
%}




<!-- 

TEASERS, NO IMAGE 2x

-------------------------------------------------------------------------------

Teaser group with no images that displays four across for use on landing pages and for related content below extended text

available parameters:
- group-title
- group-linktext
- group-linkurl
- group-blurb
* title1
* url1
- blurb1
* title2
* url2
- blurb2

* required

-------------------------------------------------------------------------------

-->

{% 	include teasers-banner.html 
	  group-title = "Title"
	  group-linktext = "learn more"
	  group-linkurl = "www.link.com"
		group-blurb = "The quick brown fox jumps over the lazy dog."
		title1 = "title"
		url1 = "www.link.com"
		blurb1 = "The quick brown fox jumps over the lazy dog."
		title2 = "title"
		url2 = "www.link.com"
		blurb2 = "The quick brown fox jumps over the lazy dog."
%}




<!-- 

TEASERS, IMAGE 2x

-------------------------------------------------------------------------------

Teaser group including images that displays two across for use on landing pages and for related content below extended text

available parameters:
- group-title
- group-linktext
- group-linkurl
- group-blurb
* title1
* source1
* url1
- blurb1
* title2
* source2
* url2
- blurb2

* required

-------------------------------------------------------------------------------

-->

{% 	include teasers-banner.html 
	  group-title = "Title"
	  group-linktext = "learn more"
	  group-linkurl = "www.link.com"
		group-blurb = "The quick brown fox jumps over the lazy dog."
		title1 = "title"
		source1 = "fpo.png"
		url1 = "www.link.com"
		blurb1 = "The quick brown fox jumps over the lazy dog."
		title2 = "title"
		source2 = "fpo.png"
		url2 = "www.link.com"
		blurb2 = "The quick brown fox jumps over the lazy dog."
%}




<!-- 

TABLE, WIDE WITH VARIABLE WIDTH COLUMNS

-------------------------------------------------------------------------------

A wider table where column width is determined by the cell content, includes up to 12 columns and 12 rows. Made for use in extended text.

available parameters:

- title
- caption

* cell-1x1
- cell-1x2
- cell-1x3
- cell-1x4
- cell-1x5
- cell-1x6
- cell-1x7
- cell-1x8
- cell-1x9
- cell-1x10
- cell-1x11
- cell-1x12

- cell-2x1
- cell-2x2
- cell-2x3
- cell-2x4
- cell-2x5
- cell-2x6
- cell-2x7
- cell-2x8
- cell-2x9
- cell-2x10
- cell-2x11
- cell-2x12

- cell-3x1
- cell-3x2
- cell-3x3
- cell-3x4
- cell-3x5
- cell-3x6
- cell-3x7
- cell-3x8
- cell-3x9
- cell-3x10
- cell-3x11
- cell-3x12

- cell-4x1
- cell-4x2
- cell-4x3
- cell-4x4
- cell-4x5
- cell-4x6
- cell-4x7
- cell-4x8
- cell-4x9
- cell-4x10
- cell-4x11
- cell-4x12

- cell-5x1
- cell-5x2
- cell-5x3
- cell-5x4
- cell-5x5
- cell-5x6
- cell-5x7
- cell-5x8
- cell-5x9
- cell-5x10
- cell-5x11
- cell-5x12

- cell-6x1
- cell-6x2
- cell-6x3
- cell-6x4
- cell-6x5
- cell-6x6
- cell-6x7
- cell-6x8
- cell-6x9
- cell-6x10
- cell-6x11
- cell-6x12

- cell-7x1
- cell-7x2
- cell-7x3
- cell-7x4
- cell-7x5
- cell-7x6
- cell-7x7
- cell-7x8
- cell-7x9
- cell-7x10
- cell-7x11
- cell-7x12

- cell-8x1
- cell-8x2
- cell-8x3
- cell-8x4
- cell-8x5
- cell-8x6
- cell-8x7
- cell-8x8
- cell-8x9
- cell-8x10
- cell-8x11
- cell-8x12

- cell-9x1
- cell-9x2
- cell-9x3
- cell-9x4
- cell-9x5
- cell-9x6
- cell-9x7
- cell-9x8
- cell-9x9
- cell-9x10
- cell-9x11
- cell-9x12

- cell-10x1
- cell-10x2
- cell-10x3
- cell-10x4
- cell-10x5
- cell-10x6
- cell-10x7
- cell-10x8
- cell-10x9
- cell-10x10
- cell-10x11
- cell-10x12

- cell-11x1
- cell-11x2
- cell-11x3
- cell-11x4
- cell-11x5
- cell-11x6
- cell-11x7
- cell-11x8
- cell-11x9
- cell-11x10
- cell-11x11
- cell-11x12

- cell-12x1
- cell-12x2
- cell-12x3
- cell-12x4
- cell-12x5
- cell-12x6
- cell-12x7
- cell-12x8
- cell-12x9
- cell-12x10
- cell-12x11
- cell-12x12


* required

-------------------------------------------------------------------------------

-->

{% 	include table-wide_varcol.html 
	  title = "Title"
		caption = "The quick brown fox jumps over the lazy dog."

		cell-1x1 = "value"
    cell-1x2 = "value"
    cell-1x3 = "value"
    cell-1x4 = "value"
    cell-1x5 = "value"
    cell-1x6 = "value"
    cell-1x7 = "value"
    cell-1x8 = "value"
    cell-1x9 = "value"
    cell-1x10 = "value"
    cell-1x11 = "value"
    cell-1x12 = "value"

    cell-2x1 = "value"
    cell-2x2 = "value"
    cell-2x3 = "value"
    cell-2x4 = "value"
    cell-2x5 = "value"
    cell-2x6 = "value"
    cell-2x7 = "value"
    cell-2x8 = "value"
    cell-2x9 = "value"
    cell-2x10 = "value"
    cell-2x11 = "value"
    cell-2x12 = "value"

    cell-3x1 = "value"
    cell-3x2 = "value"
    cell-3x3 = "value"
    cell-3x4 = "value"
    cell-3x5 = "value"
    cell-3x6 = "value"
    cell-3x7 = "value"
    cell-3x8 = "value"
    cell-3x9 = "value"
    cell-3x10 = "value"
    cell-3x11 = "value"
    cell-3x12 = "value"

    cell-4x1 = "value"
    cell-4x2 = "value"
    cell-4x3 = "value"
    cell-4x4 = "value"
    cell-4x5 = "value"
    cell-4x6 = "value"
    cell-4x7 = "value"
    cell-4x8 = "value"
    cell-4x9 = "value"
    cell-4x10 = "value"
    cell-4x11 = "value"
    cell-4x12 = "value"

    cell-5x1 = "value"
    cell-5x2 = "value"
    cell-5x3 = "value"
    cell-5x4 = "value"
    cell-5x5 = "value"
    cell-5x6 = "value"
    cell-5x7 = "value"
    cell-5x8 = "value"
    cell-5x9 = "value"
    cell-5x10 = "value"
    cell-5x11 = "value"
    cell-5x12 = "value"

    cell-6x1 = "value"
    cell-6x2 = "value"
    cell-6x3 = "value"
    cell-6x4 = "value"
    cell-6x5 = "value"
    cell-6x6 = "value"
    cell-6x7 = "value"
    cell-6x8 = "value"
    cell-6x9 = "value"
    cell-6x10 = "value"
    cell-6x11 = "value"
    cell-6x12 = "value"

    cell-7x1 = "value"
    cell-7x2 = "value"
    cell-7x3 = "value"
    cell-7x4 = "value"
    cell-7x5 = "value"
    cell-7x6 = "value"
    cell-7x7 = "value"
    cell-7x8 = "value"
    cell-7x9 = "value"
    cell-7x10 = "value"
    cell-7x11 = "value"
    cell-7x12 = "value"

    cell-8x1 = "value"
    cell-8x2 = "value"
    cell-8x3 = "value"
    cell-8x4 = "value"
    cell-8x5 = "value"
    cell-8x6 = "value"
    cell-8x7 = "value"
    cell-8x8 = "value"
    cell-8x9 = "value"
    cell-8x10 = "value"
    cell-8x11 = "value"
    cell-8x12 = "value"

    cell-9x1 = "value"
    cell-9x2 = "value"
    cell-9x3 = "value"
    cell-9x4 = "value"
    cell-9x5 = "value"
    cell-9x6 = "value"
    cell-9x7 = "value"
    cell-9x8 = "value"
    cell-9x9 = "value"
    cell-9x10 = "value"
    cell-9x11 = "value"
    cell-9x12 = "value"

    cell-10x1 = "value"
    cell-10x2 = "value"
    cell-10x3 = "value"
    cell-10x4 = "value"
    cell-10x5 = "value"
    cell-10x6 = "value"
    cell-10x7 = "value"
    cell-10x8 = "value"
    cell-10x9 = "value"
    cell-10x10 = "value"
    cell-10x11 = "value"
    cell-10x12 = "value"

    cell-11x1 = "value"
    cell-11x2 = "value"
    cell-11x3 = "value"
    cell-11x4 = "value"
    cell-11x5 = "value"
    cell-11x6 = "value"
    cell-11x7 = "value"
    cell-11x8 = "value"
    cell-11x9 = "value"
    cell-11x10 = "value"
    cell-11x11 = "value"
    cell-11x12 = "value"

    cell-12x1 = "value"
    cell-12x2 = "value"
    cell-12x3 = "value"
    cell-12x4 = "value"
    cell-12x5 = "value"
    cell-12x6 = "value"
    cell-12x7 = "value"
    cell-12x8 = "value"
    cell-12x9 = "value"
    cell-12x10 = "value"
    cell-12x11 = "value"
    cell-12x12 = "value"
%}




<!-- 

TABLE, WIDE WITH EQUAL WIDTH COLUMNS

-------------------------------------------------------------------------------

A wider table where columns are set with an equal width regardless of content, includes up to 12 columns and 12 rows. Made for use in extended text.

available parameters:

- title
- caption

* cell-1x1
- cell-1x2
- cell-1x3
- cell-1x4
- cell-1x5
- cell-1x6
- cell-1x7
- cell-1x8
- cell-1x9
- cell-1x10
- cell-1x11
- cell-1x12

- cell-2x1
- cell-2x2
- cell-2x3
- cell-2x4
- cell-2x5
- cell-2x6
- cell-2x7
- cell-2x8
- cell-2x9
- cell-2x10
- cell-2x11
- cell-2x12

- cell-3x1
- cell-3x2
- cell-3x3
- cell-3x4
- cell-3x5
- cell-3x6
- cell-3x7
- cell-3x8
- cell-3x9
- cell-3x10
- cell-3x11
- cell-3x12

- cell-4x1
- cell-4x2
- cell-4x3
- cell-4x4
- cell-4x5
- cell-4x6
- cell-4x7
- cell-4x8
- cell-4x9
- cell-4x10
- cell-4x11
- cell-4x12

- cell-5x1
- cell-5x2
- cell-5x3
- cell-5x4
- cell-5x5
- cell-5x6
- cell-5x7
- cell-5x8
- cell-5x9
- cell-5x10
- cell-5x11
- cell-5x12

- cell-6x1
- cell-6x2
- cell-6x3
- cell-6x4
- cell-6x5
- cell-6x6
- cell-6x7
- cell-6x8
- cell-6x9
- cell-6x10
- cell-6x11
- cell-6x12

- cell-7x1
- cell-7x2
- cell-7x3
- cell-7x4
- cell-7x5
- cell-7x6
- cell-7x7
- cell-7x8
- cell-7x9
- cell-7x10
- cell-7x11
- cell-7x12

- cell-8x1
- cell-8x2
- cell-8x3
- cell-8x4
- cell-8x5
- cell-8x6
- cell-8x7
- cell-8x8
- cell-8x9
- cell-8x10
- cell-8x11
- cell-8x12

- cell-9x1
- cell-9x2
- cell-9x3
- cell-9x4
- cell-9x5
- cell-9x6
- cell-9x7
- cell-9x8
- cell-9x9
- cell-9x10
- cell-9x11
- cell-9x12

- cell-10x1
- cell-10x2
- cell-10x3
- cell-10x4
- cell-10x5
- cell-10x6
- cell-10x7
- cell-10x8
- cell-10x9
- cell-10x10
- cell-10x11
- cell-10x12

- cell-11x1
- cell-11x2
- cell-11x3
- cell-11x4
- cell-11x5
- cell-11x6
- cell-11x7
- cell-11x8
- cell-11x9
- cell-11x10
- cell-11x11
- cell-11x12

- cell-12x1
- cell-12x2
- cell-12x3
- cell-12x4
- cell-12x5
- cell-12x6
- cell-12x7
- cell-12x8
- cell-12x9
- cell-12x10
- cell-12x11
- cell-12x12


* required

-------------------------------------------------------------------------------

-->

{% 	include table-wide_equalcol.html 
	  title = "Title"
		caption = "The quick brown fox jumps over the lazy dog."

		cell-1x1 = "value"
    cell-1x2 = "value"
    cell-1x3 = "value"
    cell-1x4 = "value"
    cell-1x5 = "value"
    cell-1x6 = "value"
    cell-1x7 = "value"
    cell-1x8 = "value"
    cell-1x9 = "value"
    cell-1x10 = "value"
    cell-1x11 = "value"
    cell-1x12 = "value"

    cell-2x1 = "value"
    cell-2x2 = "value"
    cell-2x3 = "value"
    cell-2x4 = "value"
    cell-2x5 = "value"
    cell-2x6 = "value"
    cell-2x7 = "value"
    cell-2x8 = "value"
    cell-2x9 = "value"
    cell-2x10 = "value"
    cell-2x11 = "value"
    cell-2x12 = "value"

    cell-3x1 = "value"
    cell-3x2 = "value"
    cell-3x3 = "value"
    cell-3x4 = "value"
    cell-3x5 = "value"
    cell-3x6 = "value"
    cell-3x7 = "value"
    cell-3x8 = "value"
    cell-3x9 = "value"
    cell-3x10 = "value"
    cell-3x11 = "value"
    cell-3x12 = "value"

    cell-4x1 = "value"
    cell-4x2 = "value"
    cell-4x3 = "value"
    cell-4x4 = "value"
    cell-4x5 = "value"
    cell-4x6 = "value"
    cell-4x7 = "value"
    cell-4x8 = "value"
    cell-4x9 = "value"
    cell-4x10 = "value"
    cell-4x11 = "value"
    cell-4x12 = "value"

    cell-5x1 = "value"
    cell-5x2 = "value"
    cell-5x3 = "value"
    cell-5x4 = "value"
    cell-5x5 = "value"
    cell-5x6 = "value"
    cell-5x7 = "value"
    cell-5x8 = "value"
    cell-5x9 = "value"
    cell-5x10 = "value"
    cell-5x11 = "value"
    cell-5x12 = "value"

    cell-6x1 = "value"
    cell-6x2 = "value"
    cell-6x3 = "value"
    cell-6x4 = "value"
    cell-6x5 = "value"
    cell-6x6 = "value"
    cell-6x7 = "value"
    cell-6x8 = "value"
    cell-6x9 = "value"
    cell-6x10 = "value"
    cell-6x11 = "value"
    cell-6x12 = "value"

    cell-7x1 = "value"
    cell-7x2 = "value"
    cell-7x3 = "value"
    cell-7x4 = "value"
    cell-7x5 = "value"
    cell-7x6 = "value"
    cell-7x7 = "value"
    cell-7x8 = "value"
    cell-7x9 = "value"
    cell-7x10 = "value"
    cell-7x11 = "value"
    cell-7x12 = "value"

    cell-8x1 = "value"
    cell-8x2 = "value"
    cell-8x3 = "value"
    cell-8x4 = "value"
    cell-8x5 = "value"
    cell-8x6 = "value"
    cell-8x7 = "value"
    cell-8x8 = "value"
    cell-8x9 = "value"
    cell-8x10 = "value"
    cell-8x11 = "value"
    cell-8x12 = "value"

    cell-9x1 = "value"
    cell-9x2 = "value"
    cell-9x3 = "value"
    cell-9x4 = "value"
    cell-9x5 = "value"
    cell-9x6 = "value"
    cell-9x7 = "value"
    cell-9x8 = "value"
    cell-9x9 = "value"
    cell-9x10 = "value"
    cell-9x11 = "value"
    cell-9x12 = "value"

    cell-10x1 = "value"
    cell-10x2 = "value"
    cell-10x3 = "value"
    cell-10x4 = "value"
    cell-10x5 = "value"
    cell-10x6 = "value"
    cell-10x7 = "value"
    cell-10x8 = "value"
    cell-10x9 = "value"
    cell-10x10 = "value"
    cell-10x11 = "value"
    cell-10x12 = "value"

    cell-11x1 = "value"
    cell-11x2 = "value"
    cell-11x3 = "value"
    cell-11x4 = "value"
    cell-11x5 = "value"
    cell-11x6 = "value"
    cell-11x7 = "value"
    cell-11x8 = "value"
    cell-11x9 = "value"
    cell-11x10 = "value"
    cell-11x11 = "value"
    cell-11x12 = "value"

    cell-12x1 = "value"
    cell-12x2 = "value"
    cell-12x3 = "value"
    cell-12x4 = "value"
    cell-12x5 = "value"
    cell-12x6 = "value"
    cell-12x7 = "value"
    cell-12x8 = "value"
    cell-12x9 = "value"
    cell-12x10 = "value"
    cell-12x11 = "value"
    cell-12x12 = "value"
%}




<!-- 

TABLE, NARROW WITH VARIABLE WIDTH COLUMNS

-------------------------------------------------------------------------------

Table the width of the text column where column width is determined by the cell content, includes up to 12 columns and 12 rows. Made for use in extended text.

available parameters:

- title
- caption

* cell-1x1
- cell-1x2
- cell-1x3
- cell-1x4
- cell-1x5
- cell-1x6
- cell-1x7
- cell-1x8
- cell-1x9
- cell-1x10
- cell-1x11
- cell-1x12

- cell-2x1
- cell-2x2
- cell-2x3
- cell-2x4
- cell-2x5
- cell-2x6
- cell-2x7
- cell-2x8
- cell-2x9
- cell-2x10
- cell-2x11
- cell-2x12

- cell-3x1
- cell-3x2
- cell-3x3
- cell-3x4
- cell-3x5
- cell-3x6
- cell-3x7
- cell-3x8
- cell-3x9
- cell-3x10
- cell-3x11
- cell-3x12

- cell-4x1
- cell-4x2
- cell-4x3
- cell-4x4
- cell-4x5
- cell-4x6
- cell-4x7
- cell-4x8
- cell-4x9
- cell-4x10
- cell-4x11
- cell-4x12

- cell-5x1
- cell-5x2
- cell-5x3
- cell-5x4
- cell-5x5
- cell-5x6
- cell-5x7
- cell-5x8
- cell-5x9
- cell-5x10
- cell-5x11
- cell-5x12

- cell-6x1
- cell-6x2
- cell-6x3
- cell-6x4
- cell-6x5
- cell-6x6
- cell-6x7
- cell-6x8
- cell-6x9
- cell-6x10
- cell-6x11
- cell-6x12

- cell-7x1
- cell-7x2
- cell-7x3
- cell-7x4
- cell-7x5
- cell-7x6
- cell-7x7
- cell-7x8
- cell-7x9
- cell-7x10
- cell-7x11
- cell-7x12

- cell-8x1
- cell-8x2
- cell-8x3
- cell-8x4
- cell-8x5
- cell-8x6
- cell-8x7
- cell-8x8
- cell-8x9
- cell-8x10
- cell-8x11
- cell-8x12

- cell-9x1
- cell-9x2
- cell-9x3
- cell-9x4
- cell-9x5
- cell-9x6
- cell-9x7
- cell-9x8
- cell-9x9
- cell-9x10
- cell-9x11
- cell-9x12

- cell-10x1
- cell-10x2
- cell-10x3
- cell-10x4
- cell-10x5
- cell-10x6
- cell-10x7
- cell-10x8
- cell-10x9
- cell-10x10
- cell-10x11
- cell-10x12

- cell-11x1
- cell-11x2
- cell-11x3
- cell-11x4
- cell-11x5
- cell-11x6
- cell-11x7
- cell-11x8
- cell-11x9
- cell-11x10
- cell-11x11
- cell-11x12

- cell-12x1
- cell-12x2
- cell-12x3
- cell-12x4
- cell-12x5
- cell-12x6
- cell-12x7
- cell-12x8
- cell-12x9
- cell-12x10
- cell-12x11
- cell-12x12


* required

-------------------------------------------------------------------------------

-->

{% 	include table-narrow_varcol.html 
	  title = "Title"
		caption = "The quick brown fox jumps over the lazy dog."

		cell-1x1 = "value"
    cell-1x2 = "value"
    cell-1x3 = "value"
    cell-1x4 = "value"
    cell-1x5 = "value"
    cell-1x6 = "value"
    cell-1x7 = "value"
    cell-1x8 = "value"
    cell-1x9 = "value"
    cell-1x10 = "value"
    cell-1x11 = "value"
    cell-1x12 = "value"

    cell-2x1 = "value"
    cell-2x2 = "value"
    cell-2x3 = "value"
    cell-2x4 = "value"
    cell-2x5 = "value"
    cell-2x6 = "value"
    cell-2x7 = "value"
    cell-2x8 = "value"
    cell-2x9 = "value"
    cell-2x10 = "value"
    cell-2x11 = "value"
    cell-2x12 = "value"

    cell-3x1 = "value"
    cell-3x2 = "value"
    cell-3x3 = "value"
    cell-3x4 = "value"
    cell-3x5 = "value"
    cell-3x6 = "value"
    cell-3x7 = "value"
    cell-3x8 = "value"
    cell-3x9 = "value"
    cell-3x10 = "value"
    cell-3x11 = "value"
    cell-3x12 = "value"

    cell-4x1 = "value"
    cell-4x2 = "value"
    cell-4x3 = "value"
    cell-4x4 = "value"
    cell-4x5 = "value"
    cell-4x6 = "value"
    cell-4x7 = "value"
    cell-4x8 = "value"
    cell-4x9 = "value"
    cell-4x10 = "value"
    cell-4x11 = "value"
    cell-4x12 = "value"

    cell-5x1 = "value"
    cell-5x2 = "value"
    cell-5x3 = "value"
    cell-5x4 = "value"
    cell-5x5 = "value"
    cell-5x6 = "value"
    cell-5x7 = "value"
    cell-5x8 = "value"
    cell-5x9 = "value"
    cell-5x10 = "value"
    cell-5x11 = "value"
    cell-5x12 = "value"

    cell-6x1 = "value"
    cell-6x2 = "value"
    cell-6x3 = "value"
    cell-6x4 = "value"
    cell-6x5 = "value"
    cell-6x6 = "value"
    cell-6x7 = "value"
    cell-6x8 = "value"
    cell-6x9 = "value"
    cell-6x10 = "value"
    cell-6x11 = "value"
    cell-6x12 = "value"

    cell-7x1 = "value"
    cell-7x2 = "value"
    cell-7x3 = "value"
    cell-7x4 = "value"
    cell-7x5 = "value"
    cell-7x6 = "value"
    cell-7x7 = "value"
    cell-7x8 = "value"
    cell-7x9 = "value"
    cell-7x10 = "value"
    cell-7x11 = "value"
    cell-7x12 = "value"

    cell-8x1 = "value"
    cell-8x2 = "value"
    cell-8x3 = "value"
    cell-8x4 = "value"
    cell-8x5 = "value"
    cell-8x6 = "value"
    cell-8x7 = "value"
    cell-8x8 = "value"
    cell-8x9 = "value"
    cell-8x10 = "value"
    cell-8x11 = "value"
    cell-8x12 = "value"

    cell-9x1 = "value"
    cell-9x2 = "value"
    cell-9x3 = "value"
    cell-9x4 = "value"
    cell-9x5 = "value"
    cell-9x6 = "value"
    cell-9x7 = "value"
    cell-9x8 = "value"
    cell-9x9 = "value"
    cell-9x10 = "value"
    cell-9x11 = "value"
    cell-9x12 = "value"

    cell-10x1 = "value"
    cell-10x2 = "value"
    cell-10x3 = "value"
    cell-10x4 = "value"
    cell-10x5 = "value"
    cell-10x6 = "value"
    cell-10x7 = "value"
    cell-10x8 = "value"
    cell-10x9 = "value"
    cell-10x10 = "value"
    cell-10x11 = "value"
    cell-10x12 = "value"

    cell-11x1 = "value"
    cell-11x2 = "value"
    cell-11x3 = "value"
    cell-11x4 = "value"
    cell-11x5 = "value"
    cell-11x6 = "value"
    cell-11x7 = "value"
    cell-11x8 = "value"
    cell-11x9 = "value"
    cell-11x10 = "value"
    cell-11x11 = "value"
    cell-11x12 = "value"

    cell-12x1 = "value"
    cell-12x2 = "value"
    cell-12x3 = "value"
    cell-12x4 = "value"
    cell-12x5 = "value"
    cell-12x6 = "value"
    cell-12x7 = "value"
    cell-12x8 = "value"
    cell-12x9 = "value"
    cell-12x10 = "value"
    cell-12x11 = "value"
    cell-12x12 = "value"
%}




<!-- 

TABLE, NARROW WITH EQUAL WIDTH COLUMNS

-------------------------------------------------------------------------------

Table the width of the text column where columns are set with an equal width regardless of content, includes up to 12 columns and 12 rows. Made for use in extended text.

available parameters:

- title
- caption

* cell-1x1
- cell-1x2
- cell-1x3
- cell-1x4
- cell-1x5
- cell-1x6
- cell-1x7
- cell-1x8
- cell-1x9
- cell-1x10
- cell-1x11
- cell-1x12

- cell-2x1
- cell-2x2
- cell-2x3
- cell-2x4
- cell-2x5
- cell-2x6
- cell-2x7
- cell-2x8
- cell-2x9
- cell-2x10
- cell-2x11
- cell-2x12

- cell-3x1
- cell-3x2
- cell-3x3
- cell-3x4
- cell-3x5
- cell-3x6
- cell-3x7
- cell-3x8
- cell-3x9
- cell-3x10
- cell-3x11
- cell-3x12

- cell-4x1
- cell-4x2
- cell-4x3
- cell-4x4
- cell-4x5
- cell-4x6
- cell-4x7
- cell-4x8
- cell-4x9
- cell-4x10
- cell-4x11
- cell-4x12

- cell-5x1
- cell-5x2
- cell-5x3
- cell-5x4
- cell-5x5
- cell-5x6
- cell-5x7
- cell-5x8
- cell-5x9
- cell-5x10
- cell-5x11
- cell-5x12

- cell-6x1
- cell-6x2
- cell-6x3
- cell-6x4
- cell-6x5
- cell-6x6
- cell-6x7
- cell-6x8
- cell-6x9
- cell-6x10
- cell-6x11
- cell-6x12

- cell-7x1
- cell-7x2
- cell-7x3
- cell-7x4
- cell-7x5
- cell-7x6
- cell-7x7
- cell-7x8
- cell-7x9
- cell-7x10
- cell-7x11
- cell-7x12

- cell-8x1
- cell-8x2
- cell-8x3
- cell-8x4
- cell-8x5
- cell-8x6
- cell-8x7
- cell-8x8
- cell-8x9
- cell-8x10
- cell-8x11
- cell-8x12

- cell-9x1
- cell-9x2
- cell-9x3
- cell-9x4
- cell-9x5
- cell-9x6
- cell-9x7
- cell-9x8
- cell-9x9
- cell-9x10
- cell-9x11
- cell-9x12

- cell-10x1
- cell-10x2
- cell-10x3
- cell-10x4
- cell-10x5
- cell-10x6
- cell-10x7
- cell-10x8
- cell-10x9
- cell-10x10
- cell-10x11
- cell-10x12

- cell-11x1
- cell-11x2
- cell-11x3
- cell-11x4
- cell-11x5
- cell-11x6
- cell-11x7
- cell-11x8
- cell-11x9
- cell-11x10
- cell-11x11
- cell-11x12

- cell-12x1
- cell-12x2
- cell-12x3
- cell-12x4
- cell-12x5
- cell-12x6
- cell-12x7
- cell-12x8
- cell-12x9
- cell-12x10
- cell-12x11
- cell-12x12


* required

-------------------------------------------------------------------------------

-->

{% 	include table-narrow_equalcol.html 
	  title = "Title"
		caption = "The quick brown fox jumps over the lazy dog."

		cell-1x1 = "value"
    cell-1x2 = "value"
    cell-1x3 = "value"
    cell-1x4 = "value"
    cell-1x5 = "value"
    cell-1x6 = "value"
    cell-1x7 = "value"
    cell-1x8 = "value"
    cell-1x9 = "value"
    cell-1x10 = "value"
    cell-1x11 = "value"
    cell-1x12 = "value"

    cell-2x1 = "value"
    cell-2x2 = "value"
    cell-2x3 = "value"
    cell-2x4 = "value"
    cell-2x5 = "value"
    cell-2x6 = "value"
    cell-2x7 = "value"
    cell-2x8 = "value"
    cell-2x9 = "value"
    cell-2x10 = "value"
    cell-2x11 = "value"
    cell-2x12 = "value"

    cell-3x1 = "value"
    cell-3x2 = "value"
    cell-3x3 = "value"
    cell-3x4 = "value"
    cell-3x5 = "value"
    cell-3x6 = "value"
    cell-3x7 = "value"
    cell-3x8 = "value"
    cell-3x9 = "value"
    cell-3x10 = "value"
    cell-3x11 = "value"
    cell-3x12 = "value"

    cell-4x1 = "value"
    cell-4x2 = "value"
    cell-4x3 = "value"
    cell-4x4 = "value"
    cell-4x5 = "value"
    cell-4x6 = "value"
    cell-4x7 = "value"
    cell-4x8 = "value"
    cell-4x9 = "value"
    cell-4x10 = "value"
    cell-4x11 = "value"
    cell-4x12 = "value"

    cell-5x1 = "value"
    cell-5x2 = "value"
    cell-5x3 = "value"
    cell-5x4 = "value"
    cell-5x5 = "value"
    cell-5x6 = "value"
    cell-5x7 = "value"
    cell-5x8 = "value"
    cell-5x9 = "value"
    cell-5x10 = "value"
    cell-5x11 = "value"
    cell-5x12 = "value"

    cell-6x1 = "value"
    cell-6x2 = "value"
    cell-6x3 = "value"
    cell-6x4 = "value"
    cell-6x5 = "value"
    cell-6x6 = "value"
    cell-6x7 = "value"
    cell-6x8 = "value"
    cell-6x9 = "value"
    cell-6x10 = "value"
    cell-6x11 = "value"
    cell-6x12 = "value"

    cell-7x1 = "value"
    cell-7x2 = "value"
    cell-7x3 = "value"
    cell-7x4 = "value"
    cell-7x5 = "value"
    cell-7x6 = "value"
    cell-7x7 = "value"
    cell-7x8 = "value"
    cell-7x9 = "value"
    cell-7x10 = "value"
    cell-7x11 = "value"
    cell-7x12 = "value"

    cell-8x1 = "value"
    cell-8x2 = "value"
    cell-8x3 = "value"
    cell-8x4 = "value"
    cell-8x5 = "value"
    cell-8x6 = "value"
    cell-8x7 = "value"
    cell-8x8 = "value"
    cell-8x9 = "value"
    cell-8x10 = "value"
    cell-8x11 = "value"
    cell-8x12 = "value"

    cell-9x1 = "value"
    cell-9x2 = "value"
    cell-9x3 = "value"
    cell-9x4 = "value"
    cell-9x5 = "value"
    cell-9x6 = "value"
    cell-9x7 = "value"
    cell-9x8 = "value"
    cell-9x9 = "value"
    cell-9x10 = "value"
    cell-9x11 = "value"
    cell-9x12 = "value"

    cell-10x1 = "value"
    cell-10x2 = "value"
    cell-10x3 = "value"
    cell-10x4 = "value"
    cell-10x5 = "value"
    cell-10x6 = "value"
    cell-10x7 = "value"
    cell-10x8 = "value"
    cell-10x9 = "value"
    cell-10x10 = "value"
    cell-10x11 = "value"
    cell-10x12 = "value"

    cell-11x1 = "value"
    cell-11x2 = "value"
    cell-11x3 = "value"
    cell-11x4 = "value"
    cell-11x5 = "value"
    cell-11x6 = "value"
    cell-11x7 = "value"
    cell-11x8 = "value"
    cell-11x9 = "value"
    cell-11x10 = "value"
    cell-11x11 = "value"
    cell-11x12 = "value"

    cell-12x1 = "value"
    cell-12x2 = "value"
    cell-12x3 = "value"
    cell-12x4 = "value"
    cell-12x5 = "value"
    cell-12x6 = "value"
    cell-12x7 = "value"
    cell-12x8 = "value"
    cell-12x9 = "value"
    cell-12x10 = "value"
    cell-12x11 = "value"
    cell-12x12 = "value"
%}




<!-- 

MEDIA, VIDEO

-------------------------------------------------------------------------------

Include embedded videos with a cover image and lightbox. The embed code may require converting double quotes to single quotes for attribute values.

available parameters:
* embed-code
- cover-source
- caption

* required

-------------------------------------------------------------------------------

-->

{%  include media-video.html
    embed-code = "<iframe width='560' height='315' src='https://www.youtube.com/embed/NREtpoqE_HU' title='YouTube video player;' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
    cover-source = "fpo.png"
    caption = "The quick brown fox jumps over the lazy dog."
%}




<!-- 

MEDIA, IMAGE 2x
please use hero-page include for hero images

-------------------------------------------------------------------------------

Two images and captions displayed in a single row. Made for use with extended text

available parameters:
* source1
- caption1
* source2
- caption2

* required

-------------------------------------------------------------------------------

-->

{%  include media-img2x.html
    source1 = "fpo.png"
    caption1 = "The quick brown fox jumps over the lazy dog."
    source2 = "fpo.png"
    caption2 = "The quick brown fox jumps over the lazy dog."
%}




<!-- 

MEDIA, IMAGE

-------------------------------------------------------------------------------

Large inline image with caption. Made for use with extended text. Please use hero-page include for hero images.

available parameters:
* source
- caption

* required

-------------------------------------------------------------------------------

-->

{%  include media-img.html
    source = "fpo.png"
    caption = "The quick brown fox jumps over the lazy dog."
%}




<!-- 

MEDIA, HERO IMAGE

-------------------------------------------------------------------------------

Large image to be displayed at the top of the page immediately beneath the introductory text.

available parameters:
* source
- caption

* required

-------------------------------------------------------------------------------

-->

{%  include media-heroimg.html
    source = "fpo.png"
    caption = "The quick brown fox jumps over the lazy dog."
%}




<!-- 

MEDIA, EMBED
please use the media-video include for all videos

-------------------------------------------------------------------------------

Include all embedded media except for videos. Please use the media-video component for videos.

available parameters:
* embed-code
- caption

* required

-------------------------------------------------------------------------------

-->

{%  include media-embed.html
    source = "fpo.png"
    caption = "The quick brown fox jumps over the lazy dog."
%}