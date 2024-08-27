<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitd71a4076e04dbf449eb810f4f48fa9d7
{
    public static $prefixLengthsPsr4 = array (
        'J' => 
        array (
            'Jcof\\' => 5,
        ),
        'B' => 
        array (
            'BitCode\\BitForm\\' => 16,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Jcof\\' => 
        array (
            0 => __DIR__ . '/..' . '/arif-un/jcof/src',
        ),
        'BitCode\\BitForm\\' => 
        array (
            0 => __DIR__ . '/../..' . '/includes',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitd71a4076e04dbf449eb810f4f48fa9d7::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitd71a4076e04dbf449eb810f4f48fa9d7::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitd71a4076e04dbf449eb810f4f48fa9d7::$classMap;

        }, null, ClassLoader::class);
    }
}
