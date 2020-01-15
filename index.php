<?php

if (!isset($_SERVER['REQUEST_URI'])) {
	$_SERVER['REQUEST_URI'] = '/index.html';
}

$p = substr(substr($_SERVER['REQUEST_URI'], 1), 0, -5);

$titles = [
    'index' => 'Strona główna',
    'pets' => 'Zwierzaki',
    'orders' => 'Zlecenia',
    'messages' => 'Wiadomości',
    'regulations' => 'Regulamin',
    'settings' => 'Ustawienia',
    'new_pet' => 'Dodaj pupila',
    'activity' => 'Aktywność',
    'login' => 'Logowanie',
    'register' => 'Rejestracja',
    'new_message' => 'Nowa wiadomość',
    'new_activity' => 'Nowe zlecenie',
];

switch ($p) {
	default:
	    die('undefined site');
	case 'index': $page = 'index.html'; break;
    case 'pets':
    case 'orders':
    case 'messages':
    case 'regulations':
    case 'settings':
	case 'new_pet':
    case 'register':
	case 'activity':
    case 'new_message':
    case 'new_activity':
    case 'login': $page = $p . '.html'; break;
}


$template = str_replace('{body_class}', $p, file_get_contents('template.html'));
$template = str_replace('{title}', $titles[$p], $template);
$content = file_get_contents($page);

echo str_replace('{content}', $content, $template);