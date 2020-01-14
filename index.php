<?php

if (!isset($_GET['p'])) {
	$_GET['p'] = 'index';
}

switch ($_GET['p']) {
	default:
	case 'index':
	$p = 'index.html'; break;
	case 'menu': 
	case 'activity': $p = $_GET['p'] . '.html'; break;
}


$template = file_get_contents('template.html');
$content = file_get_contents($p);

echo str_replace('{content}', $content, $template);