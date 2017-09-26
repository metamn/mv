# images

## houghlines

- http://www.fmwconcepts.com/imagemagick/houghlines/index.php
- as bigger the last percentage the less lines are drawn: `0x1+10%+80%`

```
convert static/images/yona-friedman-the-dilution-of-architecture-1.jpg -canny 0x1+10%+80% static/images/yona-friedman-the-dilution-of-architecture-1-canny.jpg

../images/houghlines -m 45 -C static/images/yona-friedman-the-dilution-of-architecture-1-canny.jpg static/images/yona-friedman-the-dilution-of-architecture-1-lines.jpg static/images/yona-friedman-the-dilution-of-architecture-1-accum.jpg

convert yona-friedman-the-dilution-of-architecture-1.jpg \( yona-friedman-the-dilution-of-architecture-1-lines.jpg -background violet -alpha shape \) \-compose over -composite yona-friedman-the-dilution-of-architecture-1-lines-overlay.jpg
```
