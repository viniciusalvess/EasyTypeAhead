<!--@extends('admin.layout.adminlayout')
@section('content') if you need a layout... -->    
	<div>
		<input
				id="IdOfYourDesire"
				class=""
				data-search="{{action('IndexController@setectSearch')}}" <!--Controller method tha will provide the data to the typehead-->
				data-key="id" <!--the id value the will be the hidden value when selected one-->
				data-display="nome" <!--the json key name that will be displayed-->
				data-hidden="id" <!--this is the name attribute of the hidden input that is created automatically-->
				type="text"
				placeholder="Municípios" value="">
	</div>    
<!--@endsection-->