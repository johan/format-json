format-json
===========

A JSON formatter module for various text/plain serialization styles

```javascript
> var json = require('format-json');
> var data = {test: "for example", some: [{nested:0, things: []}, {}]};
> console.log(json.diffy(data));
{ "test": "for example"
, "some":
  [ { "nested": 0
    , "things": []
    }
  , {}
  ]
}
> console.log(json.plain(data));
{
  "test": "for example",
  "some": [
    {
      "nested": 0,
      "things": []
    },
    {}
  ]
}
> console.log(json.terse(data));
{"test":"for example","some":[{"nested":0,"things":[]},{}]}
> console.log(json.space(data));
{ "test": "for example", "some": [ { "nested": 0, "things": [] }, {} ] }
> console.log(json.lines(data));
{ "test": "for example"
, "some": [ { "nested": 0, "things": [] }, {} ]
}
```

### Why?

For short: diffs in version controlled JSON is what prompted `json.diffy`.

The comma-first style may look wonky at first, but it's a compromise that helps
produce diffs where a change (addition, change or deletion) of one property has
no affect on surrounding lines to reduce the amount of diff noise.

Having used this format for a while now, I also appreciate how you get straight
left margins for Objects and Arrays alike.

Not convinced? Then please don't use it! :-)
