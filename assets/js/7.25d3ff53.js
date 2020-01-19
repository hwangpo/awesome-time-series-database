(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{105:function(t,a,e){"use strict";var i=[{name:"name",type:"value",md:!1},{name:"displayName",type:"value",mdname:"name"},{name:"website",type:"value",md:!1},{name:"github",type:"value"},{name:"status",type:"value",values:["active","maintained","dead"]},{name:"lang",type:"value",values:["c","c++","erlang","go","haskell","java","javascript","python","rust","scala"]},{name:"backend",type:"array",values:["bigtable","cassandra","ceph","elasticsearch","hbase","memory","localfs","s3","dynamodb","spark","postgresql","hdfs","azdls","solr","mongodb","accumulo","leveldb","foundationdb"]},{name:"protocol",type:"array",values:["embed","prometheus","http","tcp","udp","grpc","thrift"]},{name:"query",type:"array",values:["sql","text","json","graphite","promql","influxql","flux","stack","thrift","pql","m3query","python","metricsql","warpscript"]},{name:"license",type:"value",values:["apache-2.0","gpl","lgpl","mit","bsd","agpl-3.0","unknown","proprietary"]},{name:"author",type:"array",md:!1},{name:"contributedBy",type:"array",md:!1}];e.d(a,"b",(function(){return s})),e.d(a,"a",(function(){return i}));var s=[{name:"akumuli",displayName:"Akumuli",website:"http://akumuli.org/",github:"https://github.com/akumuli/Akumuli",status:"maintained",lang:"c++",backend:["localfs"],protocol:["tcp"],query:["text"],license:"apache-2.0",author:["Lazin"],contributedBy:["at15"]},{name:"arctic",displayName:"Arctic",website:"https://arctic.readthedocs.io/en/latest/",github:"https://github.com/man-group/arctic",status:"active",lang:"python",backend:["mongodb"],protocol:["tcp"],query:["python"],license:"lgpl",author:["bmoscon"],contributedBy:["at15"]},{name:"argus",displayName:"Argus",website:"https://github.com/salesforce/Argus",github:"https://github.com/salesforce/Argus",status:"dead",lang:"java",backend:["hbase"],protocol:["http"],query:["json"],license:"bsd",author:["xizi-xu"],contributedBy:["at15"]},{name:"atlas",displayName:"Atlas",website:"https://github.com/Netflix/atlas",github:"https://github.com/Netflix/atlas",status:"maintained",lang:"scala",backend:["memory"],protocol:["http"],query:["stack"],license:"apache-2.0",author:["brharrington"],contributedBy:["at15"]},{name:"beringei",displayName:"Beringei",website:"https://github.com/facebookarchive/beringei",github:"https://github.com/facebookarchive/beringei",status:"dead",lang:"c++",backend:["memory"],protocol:["thrift"],query:["thrift"],license:"bsd",author:["scottfranklin"],contributedBy:["at15"]},{name:"biggraphite",displayName:"BigGraphite",website:"https://github.com/criteo/biggraphite",github:"https://github.com/criteo/biggraphite",status:"maintained",lang:"python",backend:["cassandra"],protocol:["http"],query:["graphite"],license:"apache-2.0",author:["unbrice","iksaif"],contributedBy:["at15"]},{name:"blueflood",displayName:"Blueflood",website:"http://blueflood.io/",github:"https://github.com/rackerlabs/blueflood",status:"dead",lang:"java",backend:["cassandra","elasticsearch"],protocol:["http"],query:["json"],license:"apache-2.0",author:["izrik","gdusbabek"],contributedBy:["at15"]},{name:"btrdb",displayName:"BTrDB",website:"http://btrdb.io/",github:"https://github.com/BTrDB/btrdb-server",status:"maintained",lang:"go",backend:["ceph"],protocol:["http"],query:["json"],license:"gpl",author:["immesys"],contributedBy:["at15"]},{name:"catena",displayName:"Catena",website:"https://github.com/Cistern/catena",github:"https://github.com/Cistern/catena",status:"dead",lang:"go",backend:["localfs"],protocol:["http"],query:["json"],license:"bsd",author:["Preetam"],contributedBy:["at15"]},{name:"chronix",displayName:"Chronix",website:"http://www.chronix.io/",github:"https://github.com/ChronixDB/chronix.server",status:"maintained",lang:"java",backend:["solr"],protocol:["http"],query:["json"],license:"apache-2.0",author:["FlorianLautenschlager"],contributedBy:["at15"]},{name:"citus",displayName:"Citus",website:"https://www.citusdata.com/",github:"https://github.com/citusdata/citus",status:"active",lang:"c",backend:["postgresql"],protocol:["tcp"],query:["sql"],license:"agpl-3.0",author:["marcoslot","onderkalaci"],contributedBy:["at15"]},{name:"clickhouse",displayName:"ClickHouse",website:"https://clickhouse.yandex/",github:"https://github.com/ClickHouse/ClickHouse",status:"active",lang:"c++",backend:["localfs"],protocol:["tcp"],query:["sql"],license:"apache-2.0",author:["alexey-milovidov","KochetovNicolai"],contributedBy:["at15"]},{name:"cortex",displayName:"Cortex",website:"https://cortexmetrics.io/",github:"https://github.com/cortexproject/cortex",status:"active",lang:"go",backend:["s3","cassandra","bigtable","dynamodb"],protocol:["http"],query:["promql"],license:"apache-2.0",author:["tomwilkie","bboreham"],contributedBy:["at15"]},{name:"crate",displayName:"CrateDB",website:"https://crate.io/",github:"https://github.com/crate/crate",status:"active",lang:"java",backend:["elasticsearch","s3"],protocol:["tcp"],query:["sql"],license:"apache-2.0",author:["mfussenegger","seut"],contributedBy:["at15"]},{name:"dalmatinerdb",displayName:"DalmatinerDB",website:"https://dalmatiner.io/",github:"https://github.com/dalmatinerdb/dalmatinerdb",status:"maintained",lang:"erlang",backend:["localfs"],protocol:["http"],query:["text"],license:"mit",author:["Licenser"],contributedBy:["at15"]},{name:"flint",displayName:"Flint",website:"https://github.com/twosigma/flint",github:"https://github.com/twosigma/flint",status:"maintained",lang:"scala",backend:["spark"],protocol:["http"],query:["json"],license:"apache-2.0",author:["icexelloss","WenboZhao"],contributedBy:["at15"]},{name:"gnocchi",displayName:"Gnocchi",website:"https://github.com/gnocchixyz/gnocchi",github:"https://github.com/gnocchixyz/gnocchi",status:"dead",lang:"python",backend:["localfs"],protocol:["http"],query:["json"],license:"apache-2.0",author:["jd","sileht"],contributedBy:["at15"]},{name:"hawkularmetrics",displayName:"HawkularMertics",website:"http://www.hawkular.org/",github:"https://github.com/hawkular/hawkular-metrics",status:"maintained",lang:"java",backend:["cassandra"],protocol:["http"],query:["json"],license:"apache-2.0",author:["tsegismont"],contributedBy:["at15"]},{name:"heroic",displayName:"Heroic",website:"https://spotify.github.io/heroic/",github:"https://github.com/spotify/heroic",status:"maintained",lang:"java",backend:["bigtable","cassandra","elasticsearch"],protocol:["http"],query:["json"],license:"apache-2.0",author:["udoprog","hexedpackets"],contributedBy:["at15"]},{name:"influxdb",displayName:"InfluxDB",website:"https://www.influxdata.com/products/influxdb-overview/",github:"https://github.com/influxdata/influxdb",status:"active",lang:"go",backend:["localfs"],protocol:["http"],query:["influxql","flux"],license:"mit",author:["pauldix","benbjohnson","jwilder","otoolep"],contributedBy:["at15"]},{name:"irondb",displayName:"IRONdb",website:"https://www.circonus.com/solutions/time-series-database/",github:"https://www.circonus.com/solutions/time-series-database/",status:"active",lang:"c",backend:["localfs"],protocol:["http"],query:["json"],license:"proprietary",author:[],contributedBy:["at15","kamelkev"]},{name:"kairosdb",displayName:"KairosDB",website:"https://kairosdb.github.io/",github:"https://github.com/kairosdb/kairosdb",status:"maintained",lang:"java",backend:["cassandra"],protocol:["http"],query:["json"],license:"apache-2.0",author:["brianhks"],contributedBy:["at15"]},{name:"khronus",displayName:"Khronus",website:"https://github.com/khronus/khronus",github:"https://github.com/khronus/khronus",status:"dead",lang:"scala",backend:["cassandra"],protocol:["http"],query:["json","influxql"],license:"apache-2.0",author:["demianberjman","pablosmedina"],contributedBy:["at15"]},{name:"lindb",displayName:"LinDB",website:"https://lindb.io/",github:"https://github.com/lindb/lindb",status:"active",lang:"go",backend:["localfs"],protocol:["http"],query:["sql"],license:"apache-2.0",author:["stone1100","CodingCrush"],contributedBy:["at15"]},{name:"m3db",displayName:"M3",website:"https://www.m3db.io/",github:"https://github.com/m3db/m3",status:"active",lang:"go",backend:["localfs"],protocol:["http"],query:["promql","graphite","m3query","sql"],license:"apache-2.0",author:["xichen2020","robskillington","schallert","richardartoul"],contributedBy:["at15"]},{name:"metrictank",displayName:"Metrictank",website:"https://github.com/grafana/metrictank",github:"https://github.com/grafana/metrictank",status:"active",lang:"go",backend:["cassandra","elasticsearch"],protocol:["http"],query:["graphite"],license:"agpl-3.0",author:["Dieterbe","replay"],contributedBy:["at15"]},{name:"newts",displayName:"Newts",website:"http://opennms.github.io/newts/",github:"https://github.com/OpenNMS/newts/",status:"maintained",lang:"java",backend:["cassandra"],protocol:["http"],query:["json"],license:"apache-2.0",author:["eevans","j-white"],contributedBy:["at15"]},{name:"opentsdb",displayName:"OpenTSDB",website:"http://opentsdb.net/",github:"https://github.com/OpenTSDB/opentsdb",status:"maintained",lang:"java",backend:["hbase"],protocol:["http","tcp"],query:["json"],license:"lgpl",author:["manolama","tsuna"],contributedBy:["at15"]},{name:"pinot",displayName:"Apache Pinot",website:"https://pinot.apache.org/",github:"https://github.com/apache/incubator-pinot",status:"active",lang:"java",backend:["s3","hdfs","azdls"],protocol:["http"],query:["pql"],license:"apache-2.0",author:["Jackie-Jiang"],contributedBy:["at15"]},{name:"pipelinedb",displayName:"PipelineDB",website:"https://github.com/pipelinedb/pipelinedb",github:"https://github.com/pipelinedb/pipelinedb",status:"dead",lang:"c",backend:["postgresql"],protocol:["tcp"],query:["sql"],license:"apache-2.0",author:["usmanm","derekjn"],contributedBy:["at15"]},{name:"prometheus",displayName:"Prometheus",website:"https://prometheus.io/",github:"https://github.com/prometheus/prometheus",status:"active",lang:"go",backend:["localfs"],protocol:["prometheus"],query:["promql"],license:"apache-2.0",author:["fabxc","juliusv","brian-brazil","beorn7","tomwilkie"],contributedBy:["at15"]},{name:"seriously",displayName:"Seriously",website:"https://github.com/dustin/seriesly",github:"https://github.com/dustin/seriesly",status:"dead",lang:"go",backend:["localfs"],protocol:["http"],query:["json"],license:"mit",author:["dustin"],contributedBy:["at15"]},{name:"sidewinder",displayName:"Sidewinder",website:"https://github.com/srotya/sidewinder",github:"https://github.com/srotya/sidewinder",status:"dead",lang:"java",backend:["localfs"],protocol:["tcp"],query:["sql"],license:"apache-2.0",author:["ambud"],contributedBy:["at15"]},{name:"siridb",displayName:"SiriDB",website:"http://siridb.net/",github:"https://github.com/SiriDB/siridb-server",status:"active",lang:"c",backend:["localfs"],protocol:["http"],query:["text"],license:"mit",author:["joente"],contributedBy:["at15"]},{name:"tdengine",displayName:"TDengine",website:"https://www.taosdata.com/",github:"https://github.com/taosdata/TDengine",status:"active",lang:"c",backend:["localfs"],protocol:["tcp"],query:["sql"],license:"agpl-3.0",author:["guanshengliang","hjxilinx","fangpanpan","hzcheng"],contributedBy:["at15","liu0x54"]},{name:"tgres",displayName:"Tgres",website:"https://github.com/tgres/tgres",github:"https://github.com/tgres/tgres",status:"dead",lang:"go",backend:["postgresql"],protocol:["tcp"],query:["sql"],license:"apache-2.0",author:["grisha"],contributedBy:["deniszh","at15"]},{name:"thanos",displayName:"Thanos",website:"https://thanos.io/",github:"https://github.com/thanos-io/thanos",status:"active",lang:"go",backend:["localfs","s3"],protocol:["http","grpc"],query:["promql"],license:"apache-2.0",author:["bwplotka","fabxc"],contributedBy:["at15"]},{name:"timbala",displayName:"Timebala",website:"https://github.com/mattbostock/timbala",github:"https://github.com/mattbostock/timbala",status:"dead",lang:"go",backend:["localfs"],protocol:["http"],query:["promql"],license:"apache-2.0",author:["mattbostock"],contributedBy:["at15"]},{name:"timely",displayName:"Timely",website:"https://code.nsa.gov/timely/",github:"https://github.com/NationalSecurityAgency/timely",status:"maintained",lang:"java",backend:["hdfs","accumulo"],protocol:["http"],query:["json"],license:"apache-2.0",author:["billoley"],contributedBy:["at15"]},{name:"timescaledb",displayName:"TimescaleDB",website:"https://www.timescale.com/",github:"https://github.com/timescale/timescaledb",status:"active",lang:"c",backend:["postgresql"],protocol:["tcp"],query:["sql"],license:"apache-2.0",author:["cevian","mfreed","akulkarni"],contributedBy:["deniszh","at15"]},{name:"traildb",displayName:"TrailDB",website:"http://traildb.io/",github:"https://github.com/traildb/traildb",status:"dead",lang:"c",backend:["localfs"],protocol:["embed"],query:["python"],license:"mit",author:["jflatow","Noeda"],contributedBy:["at15"]},{name:"tsdblayer",displayName:"tsdb-layer",website:"https://github.com/richardartoul/tsdb-layer",github:"https://github.com/richardartoul/tsdb-layer",status:"dead",lang:"go",backend:["foundationdb"],protocol:["grpc"],query:["text"],license:"unknown",author:["richardartoul"],contributedBy:["at15"]},{name:"uts",displayName:"μts",website:"https://github.com/mixer/uts",github:"https://github.com/mixer/uts",status:"dead",lang:"javascript",backend:["memory"],protocol:["embed"],query:["json"],license:"mit",author:["connor4312"],contributedBy:["barakplasma"]},{name:"vaultaire",displayName:"Vaultaire",website:"https://github.com/afcowie/vaultaire",github:"https://github.com/afcowie/vaultaire",status:"dead",lang:"haskell",backend:["ceph"],protocol:["http"],query:["json"],license:"unknown",author:["afcowie","christian-marie"],contributedBy:["at15"]},{name:"victoriametrics",displayName:"VictoriaMetrics",website:"https://victoriametrics.com/",github:"https://github.com/VictoriaMetrics/VictoriaMetrics",status:"active",lang:"go",backend:["localfs"],protocol:["http"],query:["promql","metricsql"],license:"apache-2.0",author:["valyala"],contributedBy:["valyala"]},{name:"vulcan",displayName:"Vulcan",website:"https://github.com/digitalocean/vulcan",github:"https://github.com/digitalocean/vulcan",status:"dead",lang:"go",backend:["cassandra"],protocol:["http"],query:["promql"],license:"apache-2.0",author:["supershabam","allanliu"],contributedBy:["at15"]},{name:"warp10",displayName:"Warp10",website:"https://warp10.io/",github:"https://github.com/senx/warp10-platform",status:"active",lang:"java",backend:["leveldb","hbase"],protocol:["http"],query:["warpscript"],license:"apache-2.0",author:["hbs","ftence"],contributedBy:["at15"]},{name:"xephonk",displayName:"Xephon-K",website:"https://github.com/xephonhq/xephon-k",github:"https://github.com/xephonhq/xephon-k",status:"dead",lang:"go",backend:["cassandra","localfs"],protocol:["http","grpc"],query:["json"],license:"mit",author:["at15"],contributedBy:["at15"]}]},216:function(t,a,e){"use strict";e.r(a);e(98),e(99),e(100),e(45);var i=e(105),s={name:"database-detail",props:["dbname"],data:function(){var t={name:"database not found"},a=!0,e=!1,s=void 0;try{for(var o,n=i.b[Symbol.iterator]();!(a=(o=n.next()).done);a=!0){var c=o.value;if(c.name===this.dbname){t=c;break}}}catch(t){e=!0,s=t}finally{try{a||null==n.return||n.return()}finally{if(e)throw s}}return{db:t}}},o=e(0),n=Object(o.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("ul",[e("li",[t._v("Name: "+t._s(t.db.displayName))]),t._v(" "),e("li",[t._v("Status: "+t._s(t.db.status))]),t._v(" "),e("li",[t._v("Website: "),e("a",{attrs:{href:t.db.website,target:"_blank"}},[t._v(t._s(t.db.website))])]),t._v(" "),e("li",[t._v("GitHub: "),e("a",{attrs:{href:t.db.github,target:"_blank"}},[t._v(t._s(t.db.github))])]),t._v(" "),e("li",[t._v("Language: "+t._s(t.db.lang))]),t._v(" "),e("li",[t._v("Backends: "+t._s(t.db.backend))]),t._v(" "),e("li",[t._v("Protocol: "+t._s(t.db.protocol))]),t._v(" "),e("li",[t._v("Query: "+t._s(t.db.query))]),t._v(" "),e("li",[t._v("License: "+t._s(t.db.license))]),t._v(" "),e("li",[t._v("Author: "),t._l(t.db.author,(function(a){return e("a",{attrs:{href:"https://github.com/"+a,target:"_blank"}},[t._v(t._s(a)+" ")])}))],2),t._v(" "),e("li",[t._v("Contributed by: "),t._l(t.db.contributedBy,(function(a){return e("a",{attrs:{href:"https://github.com/"+a,target:"_blank"}},[t._v(t._s(a)+" ")])}))],2)])])}),[],!1,null,"4f4b6538",null);a.default=n.exports}}]);