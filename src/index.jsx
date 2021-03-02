import {Button, TextView, TextInput, StackLayout, ScrollView, contentView} from 'tabris';

contentView.append(
	<$>
		<TextView id='vk' centerX top='prev() 16' font='24px' text='  VK  '/>
		<TextView id='ek' right='#vk' baseline='#vk' font='24px' text='EK'/>
		<TextView id='db' left='#vk' baseline='#vk' font='24px' text='DB'/>
		<TextInput id='vkin' centerX top='#vk' width='100' font='20px'/>
		<TextInput id='ekin' right='#vkin' top='#ek' width='100' font='20px'/>
		<TextInput id='dbin' left='#vkin' top='#db' width='100' font='20px'/>
		<Button center onSelect={showText}>Berechnen</Button>
    </$>
);

function showText() {
	var ek = parseFloat($(TextInput).only('#ekin').text.replace( /,/,"." ));
	var vk = parseFloat($(TextInput).only('#vkin').text.replace( /,/,"." ));
	var db = parseFloat($(TextInput).only('#dbin').text.replace( /,/,"." ));
	
	if(isNaN(db)){
		db = Math.round((vk-ek)/vk*10000)/100;
		$(TextInput).only('#dbin').text = '' + db + ' %';
	}
	
	if(isNaN(vk)){
		vk = Math.round(ek/(1-db/100)*100)/100;
		$(TextInput).only('#vkin').text = '' + vk;
	}
	
	if(isNaN(ek)){
		ek = Math.round((vk-vk*db/100)*100)/100;
		$(TextInput).only('#ekin').text = '' + ek;
	}
	
}
