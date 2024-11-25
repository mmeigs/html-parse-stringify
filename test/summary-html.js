const summaryHTML = `<html lang="en">
<body class="package-declaration-page">
<div class="flex-box">
<div class="flex-content">
<main role="main">
<div class="header">
<h1 title="Package com.mongodb.client" class="title">Package com.mongodb.client</h1>
</div>
<hr>
<div class="package-signature"><span class="annotations"><a href="http://mongodb.github.io/mongo-java-driver/5.2/apidocs/mongodb-driver-core/com/mongodb/lang/NonNullApi.html" title="class or interface in com.mongodb.lang" class="external-link">@NonNullApi</a>
</span>package <span class="element-name">com.mongodb.client</span></div>
<section class="package-description" id="package-description">
<div class="block">This package contains the synchronous CRUD API.</div>
</section>
<section class="summary">
<ul class="summary-list">
<li>
<div id="related-package-summary">
<div class="caption"><span>Related Packages</span></div>
<div class="summary-table two-column-summary">
<div class="table-header col-first">Package</div>
<div class="table-header col-last">Description</div>
<div class="col-first even-row-color"><a href="gridfs/package-summary.html">com.mongodb.client.gridfs</a></div>
<div class="col-last even-row-color">
<div class="block">This package contains the new GridFS implementation</div>
</div>
<div class="col-first odd-row-color"><a href="vault/package-summary.html">com.mongodb.client.vault</a></div>
<div class="col-last odd-row-color">
<div class="block">This package contains the Key Vault API</div>
</div>
</div>
</div>
</li>
<li>
<div id="class-summary">
<div class="table-tabs" role="tablist" aria-orientation="horizontal"><button id="class-summary-tab0" role="tab" aria-selected="true" aria-controls="class-summary.tabpanel" tabindex="0" onkeydown="switchTab(event)" onclick="show('class-summary', 'class-summary', 2)" class="active-table-tab">All Classes and Interfaces</button><button id="class-summary-tab1" role="tab" aria-selected="false" aria-controls="class-summary.tabpanel" tabindex="-1" onkeydown="switchTab(event)" onclick="show('class-summary', 'class-summary-tab1', 2)" class="table-tab">Interfaces</button><button id="class-summary-tab2" role="tab" aria-selected="false" aria-controls="class-summary.tabpanel" tabindex="-1" onkeydown="switchTab(event)" onclick="show('class-summary', 'class-summary-tab2', 2)" class="table-tab">Classes</button></div>
<div id="class-summary.tabpanel" role="tabpanel">
<div class="summary-table two-column-summary" aria-labelledby="class-summary-tab0">
<div class="table-header col-first">Class</div>
<div class="table-header col-last">Description</div>
<div class="col-first even-row-color class-summary class-summary-tab1"><a href="AggregateIterable.html" title="interface in com.mongodb.client">AggregateIterable</a>&lt;TResult&gt;</div>
<div class="col-last even-row-color class-summary class-summary-tab1">
<div class="block">Iterable for aggregate.</div>
</div>
<div class="col-first odd-row-color class-summary class-summary-tab1"><a href="ChangeStreamIterable.html" title="interface in com.mongodb.client">ChangeStreamIterable</a>&lt;TResult&gt;</div>
<div class="col-last odd-row-color class-summary class-summary-tab1">
<div class="block">Iterable for change streams.</div>
</div>
<div class="col-first even-row-color class-summary class-summary-tab1"><a href="ClientSession.html" title="interface in com.mongodb.client">ClientSession</a></div>
<div class="col-last even-row-color class-summary class-summary-tab1">
<div class="block">A client session that supports transactions.</div>
</div>
<div class="col-first odd-row-color class-summary class-summary-tab1"><a href="DistinctIterable.html" title="interface in com.mongodb.client">DistinctIterable</a>&lt;TResult&gt;</div>
<div class="col-last odd-row-color class-summary class-summary-tab1">
<div class="block">Iterable interface for distinct.</div>
</div>
<div class="col-first even-row-color class-summary class-summary-tab1"><a href="FindIterable.html" title="interface in com.mongodb.client">FindIterable</a>&lt;TResult&gt;</div>
<div class="col-last even-row-color class-summary class-summary-tab1">
<div class="block">Iterable for find.</div>
</div>
<div class="col-first odd-row-color class-summary class-summary-tab1"><a href="ListCollectionNamesIterable.html" title="interface in com.mongodb.client">ListCollectionNamesIterable</a></div>
<div class="col-last odd-row-color class-summary class-summary-tab1">
<div class="block">Iterable for listing collection names.</div>
</div>
<div class="col-first even-row-color class-summary class-summary-tab1"><a href="ListCollectionsIterable.html" title="interface in com.mongodb.client">ListCollectionsIterable</a>&lt;TResult&gt;</div>
<div class="col-last even-row-color class-summary class-summary-tab1">
<div class="block">Iterable for ListCollections.</div>
</div>
<div class="col-first odd-row-color class-summary class-summary-tab1"><a href="ListDatabasesIterable.html" title="interface in com.mongodb.client">ListDatabasesIterable</a>&lt;TResult&gt;</div>
<div class="col-last odd-row-color class-summary class-summary-tab1">
<div class="block">Iterable for ListDatabases.</div>
</div>
<div class="col-first even-row-color class-summary class-summary-tab1"><a href="ListIndexesIterable.html" title="interface in com.mongodb.client">ListIndexesIterable</a>&lt;TResult&gt;</div>
<div class="col-last even-row-color class-summary class-summary-tab1">
<div class="block">Iterable for ListIndexes.</div>
</div>
<div class="col-first odd-row-color class-summary class-summary-tab1"><a href="ListSearchIndexesIterable.html" title="interface in com.mongodb.client">ListSearchIndexesIterable</a>&lt;TResult&gt;</div>
<div class="col-last odd-row-color class-summary class-summary-tab1">
<div class="block">Iterable for listing Atlas Search indexes.</div>
</div>
<div class="col-first even-row-color class-summary class-summary-tab1"><a href="MapReduceIterable.html" title="interface in com.mongodb.client">MapReduceIterable</a>&lt;TResult&gt;</div>
<div class="col-last even-row-color class-summary class-summary-tab1">Deprecated.
<div class="deprecation-comment">Superseded by aggregate</div>
</div>
<div class="col-first odd-row-color class-summary class-summary-tab1"><a href="MongoChangeStreamCursor.html" title="interface in com.mongodb.client">MongoChangeStreamCursor</a>&lt;TResult&gt;</div>
<div class="col-last odd-row-color class-summary class-summary-tab1">
<div class="block">The Mongo Cursor interface for change streams implementing the iterator protocol.</div>
</div>
<div class="col-first even-row-color class-summary class-summary-tab1"><a href="MongoClient.html" title="interface in com.mongodb.client">MongoClient</a></div>
<div class="col-last even-row-color class-summary class-summary-tab1">
<div class="block">A client-side representation of a MongoDB cluster.</div>
</div>
<div class="col-first odd-row-color class-summary class-summary-tab2"><a href="MongoClientFactory.html" title="class in com.mongodb.client">MongoClientFactory</a></div>
<div class="col-last odd-row-color class-summary class-summary-tab2">
<div class="block">A JNDI ObjectFactory for <a href="MongoClient.html" title="interface in com.mongodb.client"><code>MongoClient</code></a> instances.</div>
</div>
<div class="col-first even-row-color class-summary class-summary-tab2"><a href="MongoClients.html" title="class in com.mongodb.client">MongoClients</a></div>
<div class="col-last even-row-color class-summary class-summary-tab2">
<div class="block">A factory for <a href="MongoClient.html" title="interface in com.mongodb.client"><code>MongoClient</code></a> instances.</div>
</div>
<div class="col-first odd-row-color class-summary class-summary-tab1"><a href="MongoCluster.html" title="interface in com.mongodb.client">MongoCluster</a></div>
<div class="col-last odd-row-color class-summary class-summary-tab1">
<div class="block">The client-side representation of a MongoDB cluster operations.</div>
</div>
<div class="col-first even-row-color class-summary class-summary-tab1"><a href="MongoCollection.html" title="interface in com.mongodb.client">MongoCollection</a>&lt;TDocument&gt;</div>
<div class="col-last even-row-color class-summary class-summary-tab1">
<div class="block">The MongoCollection interface.</div>
</div>
<div class="col-first odd-row-color class-summary class-summary-tab1"><a href="MongoCursor.html" title="interface in com.mongodb.client">MongoCursor</a>&lt;TResult&gt;</div>
<div class="col-last odd-row-color class-summary class-summary-tab1">
<div class="block">The Mongo Cursor interface implementing the iterator protocol.</div>
</div>
<div class="col-first even-row-color class-summary class-summary-tab1"><a href="MongoDatabase.html" title="interface in com.mongodb.client">MongoDatabase</a></div>
<div class="col-last even-row-color class-summary class-summary-tab1">
<div class="block">The MongoDatabase interface.</div>
</div>
<div class="col-first odd-row-color class-summary class-summary-tab1"><a href="MongoIterable.html" title="interface in com.mongodb.client">MongoIterable</a>&lt;TResult&gt;</div>
<div class="col-last odd-row-color class-summary class-summary-tab1">
<div class="block">The MongoIterable is the results from an operation, such as a query.</div>
</div>
<div class="col-first even-row-color class-summary class-summary-tab1"><a href="SynchronousContextProvider.html" title="interface in com.mongodb.client">SynchronousContextProvider</a></div>
<div class="col-last even-row-color class-summary class-summary-tab1">
<div class="block">A <code>ContextProvider</code> for synchronous clients.</div>
</div>
<div class="col-first odd-row-color class-summary class-summary-tab1"><a href="TransactionBody.html" title="interface in com.mongodb.client">TransactionBody</a>&lt;T&gt;</div>
<div class="col-last odd-row-color class-summary class-summary-tab1">
<div class="block">A functional interface representing the body of a transaction.</div>
</div>
</div>
</div>
</div>
</li>
</ul>
</section>
</main>
</div>
</div>
</body>
</html>
`;

export default summaryHTML;