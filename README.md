# Declarar una tabla simple


```php
$table = Tablefy::getInstance('tabla_prueba');
$table->setHeader(array('name_columna1','name_columna2'));
$table->setData(function()  {
	  $data  = obtener_datos()
      return $data
  },function($n) {
       return array(
        'name_columna1'           =>$n['campo_1'],
        'name_columna2'          => $n['campo_2'],
       );
  });

$table->prepare();


