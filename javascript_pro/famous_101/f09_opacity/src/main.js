// Opacity

var Engine = famous.core.Engine;
var Surface = famous.core.Surface;
var Transform = famous.core.Transform;
var StateModifier = famous.modifiers.StateModifier;

var mainContext = Engine.createContext();

var surface = new Surface({
  size: [100, 100],
  content: 'stretch',
  properties: {
    color: 'white',
    backgroundColor: '#FA5C4F'
  }
});

var modifier = new StateModifier({
  opacity: 0.5,
  transform: Transform.scale(1, 3, 1),
  align: [0.5, 0.5],
  origin: [0.5, 0.5]
});

mainContext.add(modifier).add(surface);
