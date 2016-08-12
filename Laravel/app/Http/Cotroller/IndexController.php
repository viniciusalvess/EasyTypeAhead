<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Municipio;

class IndexController extends Controller
{    
    public function index()
    {
        return view('test');
    }

    public function setectSearch($query = ''){
        if($query == ''){
            return Municipio::selectRaw('CONCAT(nome, " - ", uf) as nome, id')->get();
        }
        return Municipio::selectRaw('CONCAT(nome, " - ", uf) as nome, id')->where('nome', 'like', "%$query%")->get();
    }
}
