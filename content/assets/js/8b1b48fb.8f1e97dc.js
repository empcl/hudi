"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[44185],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(a),m=i,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},52058:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=a(87462),i=(a(67294),a(3905));const r={title:"Release 0.11.1",sidebar_position:5,layout:"releases",toc:!0,last_modified_at:new Date("2022-06-20T06:30:00.000Z")},l="[Release 0.11.1](https://github.com/apache/hudi/releases/tag/release-0.11.1) ([docs](/docs/0.11.1/quick-start-guide))",o={unversionedId:"release-0.11.1",id:"release-0.11.1",title:"Release 0.11.1",description:"Migration Guide",source:"@site/releases/release-0.11.1.md",sourceDirName:".",slug:"/release-0.11.1",permalink:"/releases/release-0.11.1",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Release 0.11.1",sidebar_position:5,layout:"releases",toc:!0,last_modified_at:"2022-06-20T06:30:00.000Z"},sidebar:"releases",previous:{title:"Release 0.12.2",permalink:"/releases/release-0.12.2"},next:{title:"Release 0.10.1",permalink:"/releases/release-0.10.1"}},s=[{value:"Migration Guide",id:"migration-guide",children:[],level:2},{value:"Release Highlights",id:"release-highlights",children:[{value:"Addressing Performance Regression in 0.11.0",id:"addressing-performance-regression-in-0110",children:[],level:3},{value:"Key generator for Spark SQL",id:"key-generator-for-spark-sql",children:[],level:3},{value:"Query with Schema evolution",id:"query-with-schema-evolution",children:[],level:3},{value:"Bug fixes",id:"bug-fixes",children:[],level:3}],level:2},{value:"Known Regressions",id:"known-regressions",children:[],level:2},{value:"Raw Release Notes",id:"raw-release-notes",children:[],level:2},{value:"Release 0.11.0 (docs)",id:"release-0110-docs",children:[],level:2},{value:"Migration Guide",id:"migration-guide-1",children:[{value:"Bundle usage updates",id:"bundle-usage-updates",children:[],level:3},{value:"Configuration updates",id:"configuration-updates",children:[],level:3}],level:2},{value:"Release Highlights",id:"release-highlights-1",children:[{value:"Multi-Modal Index",id:"multi-modal-index",children:[],level:3},{value:"Data Skipping with Metadata Table",id:"data-skipping-with-metadata-table",children:[],level:3},{value:"Async Indexer",id:"async-indexer",children:[],level:3},{value:"Spark DataSource Improvements",id:"spark-datasource-improvements",children:[],level:3},{value:"Schema-on-read for Spark",id:"schema-on-read-for-spark",children:[],level:3},{value:"Spark SQL Improvements",id:"spark-sql-improvements",children:[],level:3},{value:"Spark Versions and Bundles",id:"spark-versions-and-bundles",children:[],level:3},{value:"Slim Utilities Bundle",id:"slim-utilities-bundle",children:[],level:3},{value:"Flink Integration Improvements",id:"flink-integration-improvements",children:[],level:3},{value:"Google BigQuery Integration",id:"google-bigquery-integration",children:[],level:3},{value:"AWS Glue Meta Sync",id:"aws-glue-meta-sync",children:[],level:3},{value:"DataHub Meta Sync",id:"datahub-meta-sync",children:[],level:3},{value:"Encryption",id:"encryption",children:[],level:3},{value:"Bucket Index",id:"bucket-index",children:[],level:3},{value:"Savepoint &amp; Restore",id:"savepoint--restore",children:[],level:3},{value:"Pulsar Write Commit Callback",id:"pulsar-write-commit-callback",children:[],level:3},{value:"HiveSchemaProvider",id:"hiveschemaprovider",children:[],level:3}],level:2},{value:"Known Regression",id:"known-regression",children:[],level:2},{value:"Raw Release Notes",id:"raw-release-notes-1",children:[],level:2}],d={toc:s},p="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"release-0111-docs"},(0,i.kt)("a",{parentName:"h1",href:"https://github.com/apache/hudi/releases/tag/release-0.11.1"},"Release 0.11.1")," (",(0,i.kt)("a",{parentName:"h1",href:"/docs/0.11.1/quick-start-guide"},"docs"),")"),(0,i.kt)("h2",{id:"migration-guide"},"Migration Guide"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This release (0.11.1) does not introduce any new table version, thus no migration is needed if you are on 0.11.0."),(0,i.kt)("li",{parentName:"ul"},"If migrating from an older release, please check the migration guide from the previous release notes, specifically\nthe upgrade instructions in ",(0,i.kt)("a",{parentName:"li",href:"/releases/older-releases#release-060-docs"},"0.6.0"),",\n",(0,i.kt)("a",{parentName:"li",href:"/releases/older-releases#release-090-docs"},"0.9.0"),", ",(0,i.kt)("a",{parentName:"li",href:"/releases/older-releases#release-0100-docs"},"0.10.0"),", and\n",(0,i.kt)("a",{parentName:"li",href:"/releases/older-releases#release-0110-docs"},"0.11.0"),".")),(0,i.kt)("h2",{id:"release-highlights"},"Release Highlights"),(0,i.kt)("h3",{id:"addressing-performance-regression-in-0110"},"Addressing Performance Regression in 0.11.0"),(0,i.kt)("p",null,"In 0.11.0 release, with the newly added support for Spark SQL features, the following performance regressions were\ninadvertently introduced:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Partition pruning for some of the COW tables is not applied properly"),(0,i.kt)("li",{parentName:"ul"},"Spark SQL query caching (which caches parsed and resolved queries) was not working correctly resulting in additional"),(0,i.kt)("li",{parentName:"ul"},"overhead to re-analyze the query every time when it's executed (listing the table contents, etc.)")),(0,i.kt)("p",null,"All of these issues have been addressed in 0.11.1 and are validated to be resolved by benchmarking the set of changes\non TPC-DS against 0.10.1."),(0,i.kt)("h3",{id:"key-generator-for-spark-sql"},"Key generator for Spark SQL"),(0,i.kt)("p",null,"Prior to this release, Spark SQL uses a different default key generator compared with data source writers, which brings\nin confusion and errors.  In 0.11.1, Spark SQL now aligns with the data source to use the same logic for determining\nthe key generator."),(0,i.kt)("h3",{id:"query-with-schema-evolution"},"Query with Schema evolution"),(0,i.kt)("p",null,"Due to necessary changes in addressing the performance regression in 0.11.0, when reading a Hudi table with Schema\nEvolution feature enabled, the query must have the config ",(0,i.kt)("inlineCode",{parentName:"p"},"hoodie.schema.on.read.enable")," to be explicitly set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\nto ensure proper schema resolution and data reading."),(0,i.kt)("h3",{id:"bug-fixes"},"Bug fixes"),(0,i.kt)("p",null,"0.11.1 release is mainly intended for bug fixes and stability. The fixes span across many components, including"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"DeltaStreamer"),(0,i.kt)("li",{parentName:"ul"},"Table config"),(0,i.kt)("li",{parentName:"ul"},"Table services"),(0,i.kt)("li",{parentName:"ul"},"Metadata table"),(0,i.kt)("li",{parentName:"ul"},"Spark SQL support"),(0,i.kt)("li",{parentName:"ul"},"Spark, GCP bundles"),(0,i.kt)("li",{parentName:"ul"},"Presto support"),(0,i.kt)("li",{parentName:"ul"},"Hive Sync and Meta Sync"),(0,i.kt)("li",{parentName:"ul"},"Flink engine"),(0,i.kt)("li",{parentName:"ul"},"Unit, functional, integration tests and CI")),(0,i.kt)("h2",{id:"known-regressions"},"Known Regressions"),(0,i.kt)("p",null,"We discovered a regression in Hudi 0.11.1 release related to metadata table and timeline server interplay with streaming ingestion pipelines."),(0,i.kt)("p",null,"The FileSystemView that Hudi maintains internally could go out of sync due to a occasional race conditions when table services are involved\n(compaction, clustering) and could result in updates and deletes routed to older file versions and hence resulting in missed updates and deletes."),(0,i.kt)("p",null,"Here are the user-flows that could potentially be impacted with this."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This impacts pipelines using Deltastreamer in ",(0,i.kt)("strong",{parentName:"li"},"continuous mode")," (sync once is not impacted), Spark streaming, or if you have been directly\nusing write client across batches/commits instead of the standard ways to write to Hudi. In other words, batch writes should not be impacted."),(0,i.kt)("li",{parentName:"ul"},"Among these write models, this could have an impact only when table services are enabled.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"COW: clustering enabled (inline or async)"),(0,i.kt)("li",{parentName:"ul"},"MOR: compaction enabled (by default, inline or async)"))),(0,i.kt)("li",{parentName:"ul"},"Also, the impact is applicable only when metadata table is enabled, and timeline server is enabled (which are defaults as of 0.12.1)")),(0,i.kt)("p",null,"Based on some production data, we expect this issue might impact roughly < 1% of updates to be missed, since its a race condition\nand table services are generally scheduled once every N commits. The percentage of update misses could be even less if the\nfrequency of table services is less."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/HUDI-5863"},"Here")," is the jira for the issue of interest and the fix has already been landed in master.\n0.12.3 should have the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/pull/8079"},"fix"),". Until we have a 0.12.3 release, we recommend you to disable metadata table\n(",(0,i.kt)("inlineCode",{parentName:"p"},"hoodie.metadata.enable=false"),") to mitigate the issue."),(0,i.kt)("p",null,"Sorry about the inconvenience caused."),(0,i.kt)("h2",{id:"raw-release-notes"},"Raw Release Notes"),(0,i.kt)("p",null,"The raw release notes are available ",(0,i.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12322822&version=12351597"},"here")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"0.11.1 release also contains all the new features and bug fixes from 0.11.0, of which the release notes are\nshown below."))),(0,i.kt)("h2",{id:"release-0110-docs"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/apache/hudi/releases/tag/release-0.11.0"},"Release 0.11.0")," (",(0,i.kt)("a",{parentName:"h2",href:"/docs/0.11.0/quick-start-guide"},"docs"),")"),(0,i.kt)("h2",{id:"migration-guide-1"},"Migration Guide"),(0,i.kt)("h3",{id:"bundle-usage-updates"},"Bundle usage updates"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Spark bundle for 3.0.x is no longer officially supported. Users are encouraged to upgrade to Spark 3.2 or 3.1."),(0,i.kt)("li",{parentName:"ul"},"Users are encouraged to use bundles with specific Spark version in the name (",(0,i.kt)("inlineCode",{parentName:"li"},"hudi-sparkX.Y-bundle"),") and move away\nfrom the legacy bundles (",(0,i.kt)("inlineCode",{parentName:"li"},"hudi-spark-bundle")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"hudi-spark3-bundle"),")."),(0,i.kt)("li",{parentName:"ul"},"Spark or Utilities bundle no longer requires additional ",(0,i.kt)("inlineCode",{parentName:"li"},"spark-avro")," package at runtime; the\noption ",(0,i.kt)("inlineCode",{parentName:"li"},"--package org.apache.spark:spark-avro_2.1*:*")," can be dropped.")),(0,i.kt)("h3",{id:"configuration-updates"},"Configuration updates"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For MOR tables, ",(0,i.kt)("inlineCode",{parentName:"li"},"hoodie.datasource.write.precombine.field")," is required for both write and read."),(0,i.kt)("li",{parentName:"ul"},"Only set ",(0,i.kt)("inlineCode",{parentName:"li"},"hoodie.datasource.write.drop.partition.columns=true")," when work\nwith ",(0,i.kt)("a",{parentName:"li",href:"/docs/gcp_bigquery"},"BigQuery integration"),"."),(0,i.kt)("li",{parentName:"ul"},"For Spark readers that rely on extracting physical partition path,\nset ",(0,i.kt)("inlineCode",{parentName:"li"},"hoodie.datasource.read.extract.partition.values.from.path=true")," to stay compatible with existing behaviors."),(0,i.kt)("li",{parentName:"ul"},"Default index type for Spark was changed from ",(0,i.kt)("inlineCode",{parentName:"li"},"BLOOM"),"\nto ",(0,i.kt)("inlineCode",{parentName:"li"},"SIMPLE")," (",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/HUDI-3091"},"HUDI-3091"),"). If you currently rely on the default ",(0,i.kt)("inlineCode",{parentName:"li"},"BLOOM"),"\nindex type, please update your configuration accordingly.")),(0,i.kt)("h2",{id:"release-highlights-1"},"Release Highlights"),(0,i.kt)("h3",{id:"multi-modal-index"},"Multi-Modal Index"),(0,i.kt)("p",null,"In 0.11.0, we enable the ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata"},"metadata table")," with synchronous updates and metadata-table-based file listing\nby default for Spark writers, to improve the performance of partition and file listing on large Hudi tables. On the\nreader side, users need to set it to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," benefit from it. The metadata table and related file listing functionality\ncan still be turned off by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"hoodie.metadata.enable=false"),". Due to this, users deploying Hudi with async table\nservices need to configure a locking service. If this feature is not relevant for you, you can set\n",(0,i.kt)("inlineCode",{parentName:"p"},"hoodie.metadata.enable=false")," additionally and use Hudi as before."),(0,i.kt)("p",null,"We introduce a multi-modal index in metadata table to drastically improve the lookup performance in file index and query\nlatency with data skipping. Two new indices are added to the metadata table"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"bloom filter index containing the file-level bloom filter to facilitate key lookup and file pruning as a part of\nbloom index during upserts by the writers"),(0,i.kt)("li",{parentName:"ol"},"column stats index containing the statistics of all/interested columns to improve file pruning based on key and\ncolumn value range in both the writer and the reader, in query planning in Spark for example.")),(0,i.kt)("p",null,"They are disabled by default. You can enable them by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"hoodie.metadata.index.bloom.filter.enable"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"hoodie.metadata.index.column.stats.enable")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", respectively."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Refer to the ",(0,i.kt)("a",{parentName:"em",href:"/docs/metadata#deployment-considerations"},"metadata table guide")," for detailed instructions on upgrade and\ndeployment.")),(0,i.kt)("h3",{id:"data-skipping-with-metadata-table"},"Data Skipping with Metadata Table"),(0,i.kt)("p",null,"With the added support for Column Statistics in metadata table, Data Skipping is now relying on the metadata table's\nColumn Stats Index (CSI) instead of its own bespoke index implementation (comparing to Spatial Curves added in 0.10.0),\nallowing to leverage Data Skipping for all datasets regardless of whether they execute layout optimization procedures (\nlike clustering) or not. To benefit from Data Skipping, make sure to set ",(0,i.kt)("inlineCode",{parentName:"p"},"hoodie.enable.data.skipping=true")," on both\nwriter and reader, as well as enable metadata table and Column Stats Index in the metadata table."),(0,i.kt)("p",null,'Data Skipping supports standard functions (as well as some common expressions) allowing you to apply common standard\ntransformations onto the raw data in your columns within your query\'s filters. For example, if you have column "ts" that\nstores timestamp as string, you can now query it using human-readable dates in your predicate like\nfollowing: ',(0,i.kt)("inlineCode",{parentName:"p"},'date_format(ts, "MM/dd/yyyy" ) < "04/01/2022"'),"."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: Currently Data Skipping is only supported in COW tables and MOR tables in read-optimized mode. The work of full\nsupport for MOR tables is tracked in ",(0,i.kt)("a",{parentName:"em",href:"https://issues.apache.org/jira/browse/HUDI-3866"},"HUDI-3866"))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Refer to the ",(0,i.kt)("a",{parentName:"em",href:"/docs/performance#read-path"},"performance")," guide for more info.")),(0,i.kt)("h3",{id:"async-indexer"},"Async Indexer"),(0,i.kt)("p",null,"In 0.11.0, we added a new asynchronous service for indexing to our rich set of table services. It allows users to create\ndifferent kinds of indices (e.g., files, bloom filters, and column stats) in the metadata table without blocking\ningestion. The indexer adds a new action ",(0,i.kt)("inlineCode",{parentName:"p"},"indexing")," on the timeline. While the indexing process itself is asynchronous\nand non-blocking to writers, a lock provider needs to be configured to safely co-ordinate the process with the inflight\nwriters."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"See the ",(0,i.kt)("a",{parentName:"em",href:"/docs/metadata_indexing"},"indexing guide")," for more details.")),(0,i.kt)("h3",{id:"spark-datasource-improvements"},"Spark DataSource Improvements"),(0,i.kt)("p",null,"Hudi's Spark low-level integration got considerable overhaul consolidating common flows to share the infrastructure and\nbring both compute and data throughput efficiencies when querying the data."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"MOR queries with no log files (except for incremental queries) tables are now leveraging Vectorized Parquet reader while reading\nthe data, meaning that Parquet reader is now able to leverage modern processors vectorized instructions to further\nspeed up decoding of the data. Enabled by default."),(0,i.kt)("li",{parentName:"ul"},"When standard Record Payload implementation is used (e.g., ",(0,i.kt)("inlineCode",{parentName:"li"},"OverwriteWithLatestAvroPayload"),"), MOR table will only\nfetch ",(0,i.kt)("em",{parentName:"li"},"strictly necessary"),' columns (primary key, pre-combine key) on top of those referenced by the query,\nsubstantially reducing wasted data throughput as well as compute spent on decompressing and decoding the data. This is\nsignificantly beneficial to "wide" MOR tables with 1000s of columns, for example.')),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"See the ",(0,i.kt)("a",{parentName:"em",href:"#migration-guide-1"},"migration guide")," for the relevant configuration updates.")),(0,i.kt)("h3",{id:"schema-on-read-for-spark"},"Schema-on-read for Spark"),(0,i.kt)("p",null,"In 0.11.0, users can now easily change the current schema of a Hudi table to adapt to the evolving data schema over\ntime. Spark SQL DDL support (experimental) was added for Spark 3.1.x and Spark 3.2.1 via ",(0,i.kt)("inlineCode",{parentName:"p"},"ALTER TABLE")," syntax."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Please refer to the ",(0,i.kt)("a",{parentName:"em",href:"/docs/schema_evolution"},"schema evolution guide")," for more details.")),(0,i.kt)("h3",{id:"spark-sql-improvements"},"Spark SQL Improvements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Users can update or delete records in Hudi tables using non-primary-key fields."),(0,i.kt)("li",{parentName:"ul"},"Time travel query is now supported via ",(0,i.kt)("inlineCode",{parentName:"li"},"timestamp as of")," syntax. (Spark 3.2+ only)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CALL")," command is added to support invoking more actions on Hudi tables.")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Please refer to the ",(0,i.kt)("a",{parentName:"em",href:"/docs/quick-start-guide"},"Quick Start - Spark Guide")," for more details and examples.")),(0,i.kt)("h3",{id:"spark-versions-and-bundles"},"Spark Versions and Bundles"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Spark 3.2 support is added; users who are on Spark 3.2 can use ",(0,i.kt)("inlineCode",{parentName:"li"},"hudi-spark3.2-bundle")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"hudi-spark3-bundle")," (legacy bundle name)."),(0,i.kt)("li",{parentName:"ul"},"Spark 3.1 will continue to be supported via ",(0,i.kt)("inlineCode",{parentName:"li"},"hudi-spark3.1-bundle"),"."),(0,i.kt)("li",{parentName:"ul"},"Spark 2.4 will continue to be supported via ",(0,i.kt)("inlineCode",{parentName:"li"},"hudi-spark2.4-bundle")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"hudi-spark-bundle")," (legacy bundle name).")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"See the ",(0,i.kt)("a",{parentName:"em",href:"#migration-guide-1"},"migration guide")," for usage updates.")),(0,i.kt)("h3",{id:"slim-utilities-bundle"},"Slim Utilities Bundle"),(0,i.kt)("p",null,"In 0.11.0, a new ",(0,i.kt)("inlineCode",{parentName:"p"},"hudi-utilities-slim-bundle")," is added to exclude dependencies that could cause conflicts and\ncompatibility issues with other frameworks such as Spark. ",(0,i.kt)("inlineCode",{parentName:"p"},"hudi-utilities-slim-bundle")," is to work with a chosen Spark\nbundle:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hudi-utilities-slim-bundle")," works with Spark 3.1 and 2.4."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hudi-utilities-bundle")," continues to work with Spark 3.1 as it does in Hudi 0.10.x.")),(0,i.kt)("h3",{id:"flink-integration-improvements"},"Flink Integration Improvements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In 0.11.0, both Flink 1.13.x and 1.14.x are supported."),(0,i.kt)("li",{parentName:"ul"},"Complex data types such as ",(0,i.kt)("inlineCode",{parentName:"li"},"Map")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Array")," are supported. Complex data types can be nested in another component data\ntype."),(0,i.kt)("li",{parentName:"ul"},"A DFS-based Flink catalog is added with catalog identifier as ",(0,i.kt)("inlineCode",{parentName:"li"},"hudi"),". You can instantiate the catalog through API\ndirectly or use the ",(0,i.kt)("inlineCode",{parentName:"li"},"CREATE CATALOG")," syntax to create it."),(0,i.kt)("li",{parentName:"ul"},"Flink supports ",(0,i.kt)("a",{parentName:"li",href:"#bucket-index"},"Bucket Index")," in normal ",(0,i.kt)("inlineCode",{parentName:"li"},"UPSERT")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"BULK_INSERT")," operations. Different from the\ndefault Flink state-based index, bucket index is in constant number of buckets. Specify SQL option ",(0,i.kt)("inlineCode",{parentName:"li"},"index.type"),"\nas ",(0,i.kt)("inlineCode",{parentName:"li"},"BUCKET")," to enable it.")),(0,i.kt)("h3",{id:"google-bigquery-integration"},"Google BigQuery Integration"),(0,i.kt)("p",null,"In 0.11.0, Hudi tables can be queried from BigQuery as external tables. Users can\nset ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.hudi.gcp.bigquery.BigQuerySyncTool")," as the sync tool implementation for ",(0,i.kt)("inlineCode",{parentName:"p"},"HoodieDeltaStreamer")," and make\nthe target Hudi table discoverable in BigQuery. Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/gcp_bigquery"},"BigQuery integration")," guide\npage for more details."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: this is an experimental feature and only works with hive-style partitioned Copy-On-Write tables.")),(0,i.kt)("h3",{id:"aws-glue-meta-sync"},"AWS Glue Meta Sync"),(0,i.kt)("p",null,"In 0.11.0, Hudi tables can be sync'ed to AWS Glue Data Catalog via AWS SDK directly. Users can\nset ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.hudi.aws.sync.AwsGlueCatalogSyncTool")," as the sync tool implementation for ",(0,i.kt)("inlineCode",{parentName:"p"},"HoodieDeltaStreamer")," and make\nthe target Hudi table discoverable in Glue catalog. Please refer\nto ",(0,i.kt)("a",{parentName:"p",href:"/docs/syncing_aws_glue_data_catalog"},"Sync to AWS Glue Data Catalog")," guide page for more details."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: this is an experimental feature.")),(0,i.kt)("h3",{id:"datahub-meta-sync"},"DataHub Meta Sync"),(0,i.kt)("p",null,"In 0.11.0, Hudi table's metadata (specifically, schema and last sync commit time) can be sync'ed\nto ",(0,i.kt)("a",{parentName:"p",href:"https://datahubproject.io/"},"DataHub"),". Users can set ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.hudi.sync.datahub.DataHubSyncTool")," as the sync tool\nimplementation for ",(0,i.kt)("inlineCode",{parentName:"p"},"HoodieDeltaStreamer")," and sync the target table as a Dataset in DataHub. Please refer\nto ",(0,i.kt)("a",{parentName:"p",href:"/docs/syncing_datahub"},"Sync to DataHub")," guide page for more details."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: this is an experimental feature.")),(0,i.kt)("h3",{id:"encryption"},"Encryption"),(0,i.kt)("p",null,"In 0.11.0, Spark 3.2 support has been added and accompanying that, Parquet 1.12 has been included, which brings\nencryption feature to Hudi (Copy-on-Write tables). Please refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/encryption"},"Encryption")," guide page for more\ndetails."),(0,i.kt)("h3",{id:"bucket-index"},"Bucket Index"),(0,i.kt)("p",null,"Bucket index, an efficient and light-weight index type, is added in 0.11.0. It distributes records to buckets using a\nhash function based on the record keys, where each bucket corresponds to a single file group. To use this index, set the\nindex type to ",(0,i.kt)("inlineCode",{parentName:"p"},"BUCKET")," and set ",(0,i.kt)("inlineCode",{parentName:"p"},"hoodie.storage.layout.partitioner.class")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.hudi.table.action.commit.SparkBucketIndexPartitioner"),".\nFor Flink, set ",(0,i.kt)("inlineCode",{parentName:"p"},"index.type=BUCKET"),"."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"For more details, please refer to hoodie.bucket.index.","*"," in the ",(0,i.kt)("a",{parentName:"em",href:"/docs/configurations"},"configurations page"),".")),(0,i.kt)("h3",{id:"savepoint--restore"},"Savepoint & Restore"),(0,i.kt)("p",null,"Disaster recovery is a mission critical feature in any production deployment. Especially when it comes to systems that\nstore data. Hudi had savepoint and restore functionality right from the beginning for COW tables. In 0.11.0, we have\nadded support for MOR tables."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"More info about this feature can be found in ",(0,i.kt)("a",{parentName:"em",href:"/docs/disaster_recovery"},"Disaster Recovery"),".")),(0,i.kt)("h3",{id:"pulsar-write-commit-callback"},"Pulsar Write Commit Callback"),(0,i.kt)("p",null,"Hudi users can use ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.hudi.callback.HoodieWriteCommitCallback")," to invoke callback function upon successful\ncommits. In 0.11.0, we add ",(0,i.kt)("inlineCode",{parentName:"p"},"HoodieWriteCommitPulsarCallback")," in addition to the existing HTTP callback and Kafka\ncallback. Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/configurations#Write-commit-pulsar-callback-configs"},"configurations page")," for\ndetailed settings."),(0,i.kt)("h3",{id:"hiveschemaprovider"},"HiveSchemaProvider"),(0,i.kt)("p",null,"In 0.11.0, ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.hudi.utilities.schema.HiveSchemaProvider")," is added for getting schema from user-defined hive\ntables. This is useful when tailing Hive tables in ",(0,i.kt)("inlineCode",{parentName:"p"},"HoodieDeltaStreamer")," instead of having to provide avro schema files."),(0,i.kt)("h2",{id:"known-regression"},"Known Regression"),(0,i.kt)("p",null,"In 0.11.0 release, with the newly added support for Spark SQL features, the following performance regressions were\ninadvertently introduced:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Partition pruning for some of the COW tables is not applied properly"),(0,i.kt)("li",{parentName:"ul"},"Spark SQL query caching (which caches parsed and resolved queries) was not working correctly resulting in additional"),(0,i.kt)("li",{parentName:"ul"},"overhead to re-analyze the query every time when it's executed (listing the table contents, etc.)")),(0,i.kt)("p",null,"All of these issues have been addressed in 0.11.1 and are validated to be resolved by benchmarking the set of changes\non TPC-DS against 0.10.1."),(0,i.kt)("p",null,"In HUDI-2761, HUDI-3576 and HUDI-4279, we did several attempts to optimize the efficiency of embedded timeline server,\nbut in some cases, these changes would cause silent data loss, the affected table types include both COW and MOR table,\nthis bug has been addressed in release 0.12.0."),(0,i.kt)("h2",{id:"raw-release-notes-1"},"Raw Release Notes"),(0,i.kt)("p",null,"The raw release notes are available ",(0,i.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12322822&version=12350673"},"here")))}u.isMDXComponent=!0}}]);