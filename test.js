import test from 'tape'
import unit from './'

test('should parse unit strings', function(t) {
	//Does not yet support hex or E notation
	
	t.deepEqual( unit('20px'), [20, 'px'] )
	t.deepEqual( unit('20 gold'), [20, 'gold'] )
	t.deepEqual( unit('2.5 px'), [2.5, 'px'] )
	t.deepEqual( unit('2.5 %'), [2.5, '%'] )
	t.deepEqual( unit('-2.5'), [-2.5, ''] )
	t.ok( isNaN(unit()[0]), 'gets NaN' )

	var tmp = [0,'']
	t.deepEqual( unit('0%%',tmp), [0, '%%'] )
	t.end()
})
