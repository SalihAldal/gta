require('./gamemode/index');

mp.gui.chat.show(false);
const chat = mp.browsers.new('package://chat/index.html');
chat.markAsChat();