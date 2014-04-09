Ext.data.JsonP.CKEDITOR_dialog_definition_contentObject({"tagname":"class","name":"CKEDITOR.dialog.definition.contentObject","autodetected":{},"files":[{"filename":"plugin.js","href":"plugin20.html#CKEDITOR-dialog-definition-contentObject"}],"private":true,"members":[{"name":"constructor","tagname":"method","owner":"CKEDITOR.dialog.definition.contentObject","id":"method-constructor","meta":{}},{"name":"add","tagname":"method","owner":"CKEDITOR.dialog.definition.contentObject","id":"method-add","meta":{}},{"name":"get","tagname":"method","owner":"CKEDITOR.dialog.definition.contentObject","id":"method-get","meta":{}},{"name":"remove","tagname":"method","owner":"CKEDITOR.dialog.definition.contentObject","id":"method-remove","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-CKEDITOR.dialog.definition.contentObject","short_doc":"This class is not really part of the API. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/plugin20.html#CKEDITOR-dialog-definition-contentObject' target='_blank'>plugin.js</a></div></pre><div class='doc-contents'><div class='rounded-box private-box'><p><strong>NOTE:</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p></div><p>This class is not really part of the API. It is the template of the\nobjects representing content pages inside the\n<a href=\"#!/api/CKEDITOR.dialog.definitionObject\" rel=\"CKEDITOR.dialog.definitionObject\" class=\"docClass\">CKEDITOR.dialog.definitionObject</a>.</p>\n\n<pre><code>CKEDITOR.on( 'dialogDefinition', function( evt ) {\n    var definition = evt.data.definition;\n    var content = definition.getContents( 'page1' );\n    content.remove( 'textInput1' );\n    // ...\n} );\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.dialog.definition.contentObject'>CKEDITOR.dialog.definition.contentObject</span><br/><a href='source/plugin20.html#CKEDITOR-dialog-definition-contentObject-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/CKEDITOR.dialog.definition.contentObject-method-constructor' class='name expandable'>CKEDITOR.dialog.definition.contentObject</a>( <span class='pre'></span> ) : <a href=\"#!/api/CKEDITOR.dialog.definition.contentObject\" rel=\"CKEDITOR.dialog.definition.contentObject\" class=\"docClass\">CKEDITOR.dialog.definition.contentObject</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Creates a contentObject class instance. ...</div><div class='long'><p>Creates a contentObject class instance.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/CKEDITOR.dialog.definition.contentObject\" rel=\"CKEDITOR.dialog.definition.contentObject\" class=\"docClass\">CKEDITOR.dialog.definition.contentObject</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-add' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.dialog.definition.contentObject'>CKEDITOR.dialog.definition.contentObject</span><br/><a href='source/plugin20.html#CKEDITOR-dialog-definition-contentObject-method-add' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.dialog.definition.contentObject-method-add' class='name expandable'>add</a>( <span class='pre'>elementDefinition, nextSiblingId</span> ) : <a href=\"#!/api/CKEDITOR.dialog.definition.uiElement\" rel=\"CKEDITOR.dialog.definition.uiElement\" class=\"docClass\">CKEDITOR.dialog.definition.uiElement</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Adds a UI element definition to the content definition. ...</div><div class='long'><p>Adds a UI element definition to the content definition.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>elementDefinition</span> : <a href=\"#!/api/CKEDITOR.dialog.definition.uiElement\" rel=\"CKEDITOR.dialog.definition.uiElement\" class=\"docClass\">CKEDITOR.dialog.definition.uiElement</a><div class='sub-desc'><p>The\nUI elemnet definition to be added.</p>\n</div></li><li><span class='pre'>nextSiblingId</span> : String<div class='sub-desc'><p>The id of an existing UI element\ndefinition which the new UI element definition will be inserted\nbefore. Omit if the new button definition is to be inserted as\nthe last item.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/CKEDITOR.dialog.definition.uiElement\" rel=\"CKEDITOR.dialog.definition.uiElement\" class=\"docClass\">CKEDITOR.dialog.definition.uiElement</a></span><div class='sub-desc'><p>The element definition inserted.</p>\n</div></li></ul></div></div></div><div id='method-get' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.dialog.definition.contentObject'>CKEDITOR.dialog.definition.contentObject</span><br/><a href='source/plugin20.html#CKEDITOR-dialog-definition-contentObject-method-get' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.dialog.definition.contentObject-method-get' class='name expandable'>get</a>( <span class='pre'>id</span> ) : <a href=\"#!/api/CKEDITOR.dialog.definition.uiElement\" rel=\"CKEDITOR.dialog.definition.uiElement\" class=\"docClass\">CKEDITOR.dialog.definition.uiElement</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Gets a UI element definition under the content definition. ...</div><div class='long'><p>Gets a UI element definition under the content definition.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : String<div class='sub-desc'><p>The id of the UI element definition.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/CKEDITOR.dialog.definition.uiElement\" rel=\"CKEDITOR.dialog.definition.uiElement\" class=\"docClass\">CKEDITOR.dialog.definition.uiElement</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-remove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.dialog.definition.contentObject'>CKEDITOR.dialog.definition.contentObject</span><br/><a href='source/plugin20.html#CKEDITOR-dialog-definition-contentObject-method-remove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.dialog.definition.contentObject-method-remove' class='name expandable'>remove</a>( <span class='pre'>id</span> ) : <a href=\"#!/api/CKEDITOR.dialog.definition.uiElement\" rel=\"CKEDITOR.dialog.definition.uiElement\" class=\"docClass\">CKEDITOR.dialog.definition.uiElement</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Removes a UI element definition from the content definition. ...</div><div class='long'><p>Removes a UI element definition from the content definition.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : String<div class='sub-desc'><p>The id of the UI element definition to be removed.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/CKEDITOR.dialog.definition.uiElement\" rel=\"CKEDITOR.dialog.definition.uiElement\" class=\"docClass\">CKEDITOR.dialog.definition.uiElement</a></span><div class='sub-desc'><p>The element definition removed.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{"private":true}});