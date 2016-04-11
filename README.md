# damson-driver-file

## Information

<table>
<tr> 
<td>Package</td><td>damson-driver-file</td>
</tr>
<tr>
<td>Description</td>
<td>File driver for Damson</td>
</tr>
</table>

## send(object)

Writes object to file, returns promise

```javascript
var FileDriver = require('damson-driver-file');
var file = new FileDriver({ filepath: 'temp.txt' });
file.send('Hello!').then(function () {
	//
});
```

```javascript
var damson = require('damson-core');
var FileDriver = require('damson-driver-file');
var SendMessage = require('damson-send-message');

damson.registerDriver(FileDriver, 'file', { filepath: 'temp.txt' });
damson.registerTask(SendMessage, 'send-message');

damson.run('send-message', { message: 'Hello!' }, 'file').then(function () {
	//
});
```