// Program Events - Event Handlers

var Engine = famous.core.Engine;
var Surface = famous.core.Surface;
var StateModifier = famous.modifiers.StateModifier;
var EventHandler = famous.core.EventHandler;

var mainContext = Engine.createContext();

var surface;
createSurface();
var eventHandler = new EventHandler();

surface.on('click', function () {
  eventHandler.emit('hello');
});

eventHandler.on('hello', function () {
  surface.setContent('heard hello');
});

function createSurface() {
  surface = new Surface({
    size: [100, 100],
    content: 'A<br>click me to emit "hello"',
    properties: {
      color: 'white',
      textAlign: 'center',
      backgroundColor: '#FA5C4F'
    }
  });

  mainContext.add(surface);
}
