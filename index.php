<?php

if (!isset($_SERVER['REQUEST_URI'])) {
	$_SERVER['REQUEST_URI'] = '/index.html';
}

$p = substr(substr($_SERVER['REQUEST_URI'], 1), 0, -5);

switch ($p) {
	default:
	case 'index': $page = 'index.html'; break;
	case 'new_pet':
	case 'activity':
    case 'login': $page = $p . '.html'; break;
}


$template = str_replace('{body_class}', $p, file_get_contents('template.html'));
$content = file_get_contents($page);

echo str_replace('{content}', $content, $template);