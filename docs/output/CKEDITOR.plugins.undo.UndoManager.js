Ext.data.JsonP.CKEDITOR_plugins_undo_UndoManager({"tagname":"class","name":"CKEDITOR.plugins.undo.UndoManager","autodetected":{},"files":[{"filename":"plugin.js","href":"plugin90.html#CKEDITOR-plugins-undo-UndoManager"}],"private":true,"members":[{"name":"locked","tagname":"property","owner":"CKEDITOR.plugins.undo.UndoManager","id":"property-locked","meta":{"private":true}},{"name":"constructor","tagname":"method","owner":"CKEDITOR.plugins.undo.UndoManager","id":"method-constructor","meta":{}},{"name":"lock","tagname":"method","owner":"CKEDITOR.plugins.undo.UndoManager","id":"method-lock","meta":{}},{"name":"redo","tagname":"method","owner":"CKEDITOR.plugins.undo.UndoManager","id":"method-redo","meta":{}},{"name":"redoable","tagname":"method","owner":"CKEDITOR.plugins.undo.UndoManager","id":"method-redoable","meta":{}},{"name":"reset","tagname":"method","owner":"CKEDITOR.plugins.undo.UndoManager","id":"method-reset","meta":{}},{"name":"resetType","tagname":"method","owner":"CKEDITOR.plugins.undo.UndoManager","id":"method-resetType","meta":{}},{"name":"save","tagname":"method","owner":"CKEDITOR.plugins.undo.UndoManager","id":"method-save","meta":{}},{"name":"type","tagname":"method","owner":"CKEDITOR.plugins.undo.UndoManager","id":"method-type","meta":{}},{"name":"undo","tagname":"method","owner":"CKEDITOR.plugins.undo.UndoManager","id":"method-undo","meta":{}},{"name":"undoable","tagname":"method","owner":"CKEDITOR.plugins.undo.UndoManager","id":"method-undoable","meta":{}},{"name":"unlock","tagname":"method","owner":"CKEDITOR.plugins.undo.UndoManager","id":"method-unlock","meta":{}},{"name":"update","tagname":"method","owner":"CKEDITOR.plugins.undo.UndoManager","id":"method-update","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-CKEDITOR.plugins.undo.UndoManager","short_doc":"Main logic for the Redo/Undo feature. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/plugin90.html#CKEDITOR-plugins-undo-UndoManager' target='_blank'>plugin.js</a></div></pre><div class='doc-contents'><div class='rounded-box private-box'><p><strong>NOTE:</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p></div><p>Main logic for the Redo/Undo feature.</p>\n\n<p><strong>Note:</strong> This class is not accessible from the global scope.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-locked' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.plugins.undo.UndoManager'>CKEDITOR.plugins.undo.UndoManager</span><br/><a href='source/plugin90.html#CKEDITOR-plugins-undo-UndoManager-property-locked' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.plugins.undo.UndoManager-property-locked' class='name expandable'>locked</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>When locked property is not null, the undo manager is locked, so\noperations like save or update are forbidden. ...</div><div class='long'><p>When <code>locked</code> property is not <code>null</code>, the undo manager is locked, so\noperations like <code>save</code> or <code>update</code> are forbidden.</p>\n\n<p>The manager can be locked/unlocked by the <a href=\"#!/api/CKEDITOR.plugins.undo.UndoManager-method-lock\" rel=\"CKEDITOR.plugins.undo.UndoManager-method-lock\" class=\"docClass\">lock</a> and <a href=\"#!/api/CKEDITOR.plugins.undo.UndoManager-method-unlock\" rel=\"CKEDITOR.plugins.undo.UndoManager-method-unlock\" class=\"docClass\">unlock</a> methods.</p>\n<p>Defaults to: <code>null</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.plugins.undo.UndoManager'>CKEDITOR.plugins.undo.UndoManager</span><br/><a href='source/plugin90.html#CKEDITOR-plugins-undo-UndoManager-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/CKEDITOR.plugins.undo.UndoManager-method-constructor' class='name expandable'>CKEDITOR.plugins.undo.UndoManager</a>( <span class='pre'>editor</span> ) : <a href=\"#!/api/CKEDITOR.plugins.undo.UndoManager\" rel=\"CKEDITOR.plugins.undo.UndoManager\" class=\"docClass\">CKEDITOR.plugins.undo.UndoManager</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Creates an UndoManager class instance. ...</div><div class='long'><p>Creates an UndoManager class instance.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>editor</span> : <a href=\"#!/api/CKEDITOR.editor\" rel=\"CKEDITOR.editor\" class=\"docClass\">CKEDITOR.editor</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/CKEDITOR.plugins.undo.UndoManager\" rel=\"CKEDITOR.plugins.undo.UndoManager\" class=\"docClass\">CKEDITOR.plugins.undo.UndoManager</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-lock' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.plugins.undo.UndoManager'>CKEDITOR.plugins.undo.UndoManager</span><br/><a href='source/plugin90.html#CKEDITOR-plugins-undo-UndoManager-method-lock' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.plugins.undo.UndoManager-method-lock' class='name expandable'>lock</a>( <span class='pre'>[dontUpdate], [forceUpdate]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Locks the snapshot stack to prevent any save/update operations and when necessary,\nupdates the tip of the snapshot st...</div><div class='long'><p>Locks the snapshot stack to prevent any save/update operations and when necessary,\nupdates the tip of the snapshot stack with the DOM changes introduced during the\nlocked period, after the <a href=\"#!/api/CKEDITOR.plugins.undo.UndoManager-method-unlock\" rel=\"CKEDITOR.plugins.undo.UndoManager-method-unlock\" class=\"docClass\">unlock</a> method is called.</p>\n\n<p>It is mainly used to ensure any DOM operations that should not be recorded\n(e.g. auto paragraphing) are not added to the stack.</p>\n\n<p><strong>Note:</strong> For every <code>lock</code> call you must call <a href=\"#!/api/CKEDITOR.plugins.undo.UndoManager-method-unlock\" rel=\"CKEDITOR.plugins.undo.UndoManager-method-unlock\" class=\"docClass\">unlock</a> once to unlock the undo manager.</p>\n        <p>Available since: <b>4.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dontUpdate</span> : Boolean (optional)<div class='sub-desc'><p>When set to <code>true</code>, the last snapshot will not be updated\nwith current contents and selection. By default, if undo manager was up to date when the lock started,\nthe last snapshot will be updated to the current state when unlocking. This means that all changes\ndone during the lock will be merged into the previous snapshot or the next one. Use this option to gain\nmore control over this behavior. For example, it is possible to group changes done during the lock into\na separate snapshot.</p>\n</div></li><li><span class='pre'>forceUpdate</span> : Boolean (optional)<div class='sub-desc'><p>When set to <code>true</code> the last snapshot will always be updated with the\ncurrent contents and selection regardless of the current state of undo manager.\nWhen not set the last snapshot will be updated only if undo manager was up to date when locking.\nAdditionally, this option makes it possible to lock snapshot when editor is not in <code>wysiwyg</code> mode,\nbecause when it's passed snapshots will not need to be compared.</p>\n</div></li></ul></div></div></div><div id='method-redo' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.plugins.undo.UndoManager'>CKEDITOR.plugins.undo.UndoManager</span><br/><a href='source/plugin90.html#CKEDITOR-plugins-undo-UndoManager-method-redo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.plugins.undo.UndoManager-method-redo' class='name expandable'>redo</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Performs redo on current index. ...</div><div class='long'><p>Performs redo on current index.</p>\n</div></div></div><div id='method-redoable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.plugins.undo.UndoManager'>CKEDITOR.plugins.undo.UndoManager</span><br/><a href='source/plugin90.html#CKEDITOR-plugins-undo-UndoManager-method-redoable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.plugins.undo.UndoManager-method-redoable' class='name expandable'>redoable</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Checks the current redo state. ...</div><div class='long'><p>Checks the current redo state.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>Whether the document has a previous state to retrieve.</p>\n</div></li></ul></div></div></div><div id='method-reset' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.plugins.undo.UndoManager'>CKEDITOR.plugins.undo.UndoManager</span><br/><a href='source/plugin90.html#CKEDITOR-plugins-undo-UndoManager-method-reset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.plugins.undo.UndoManager-method-reset' class='name expandable'>reset</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Resets the undo stack. ...</div><div class='long'><p>Resets the undo stack.</p>\n</div></div></div><div id='method-resetType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.plugins.undo.UndoManager'>CKEDITOR.plugins.undo.UndoManager</span><br/><a href='source/plugin90.html#CKEDITOR-plugins-undo-UndoManager-method-resetType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.plugins.undo.UndoManager-method-resetType' class='name expandable'>resetType</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Resets all typing variables. ...</div><div class='long'><p>Resets all typing variables.</p>\n\n<h1>type</h1>\n</div></div></div><div id='method-save' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.plugins.undo.UndoManager'>CKEDITOR.plugins.undo.UndoManager</span><br/><a href='source/plugin90.html#CKEDITOR-plugins-undo-UndoManager-method-save' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.plugins.undo.UndoManager-method-save' class='name expandable'>save</a>( <span class='pre'>onContentOnly, image, autoFireChange</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Saves a snapshot of the document image for later retrieval. ...</div><div class='long'><p>Saves a snapshot of the document image for later retrieval.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>onContentOnly</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>image</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>autoFireChange</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-type' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.plugins.undo.UndoManager'>CKEDITOR.plugins.undo.UndoManager</span><br/><a href='source/plugin90.html#CKEDITOR-plugins-undo-UndoManager-method-type' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.plugins.undo.UndoManager-method-type' class='name expandable'>type</a>( <span class='pre'>keystroke, isCharacter</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Handles keystroke support for the undo manager. ...</div><div class='long'><p>Handles keystroke support for the undo manager. It is called whenever a keystroke that\ncan change the editor contents is pressed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>keystroke</span> : Number<div class='sub-desc'><p>The key code.</p>\n</div></li><li><span class='pre'>isCharacter</span> : Boolean<div class='sub-desc'><p>If <code>true</code>, it is a character ('a', '1', '&amp;', ...). Otherwise it is the remove key (<em>Delete</em> or <em>Backspace</em>).</p>\n</div></li></ul></div></div></div><div id='method-undo' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.plugins.undo.UndoManager'>CKEDITOR.plugins.undo.UndoManager</span><br/><a href='source/plugin90.html#CKEDITOR-plugins-undo-UndoManager-method-undo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.plugins.undo.UndoManager-method-undo' class='name expandable'>undo</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Performs undo on current index. ...</div><div class='long'><p>Performs undo on current index.</p>\n</div></div></div><div id='method-undoable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.plugins.undo.UndoManager'>CKEDITOR.plugins.undo.UndoManager</span><br/><a href='source/plugin90.html#CKEDITOR-plugins-undo-UndoManager-method-undoable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.plugins.undo.UndoManager-method-undoable' class='name expandable'>undoable</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Checks the current undo state. ...</div><div class='long'><p>Checks the current undo state.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>Whether the document has a future state to restore.</p>\n</div></li></ul></div></div></div><div id='method-unlock' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.plugins.undo.UndoManager'>CKEDITOR.plugins.undo.UndoManager</span><br/><a href='source/plugin90.html#CKEDITOR-plugins-undo-UndoManager-method-unlock' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.plugins.undo.UndoManager-method-unlock' class='name expandable'>unlock</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Unlocks the snapshot stack and checks to amend the last snapshot. ...</div><div class='long'><p>Unlocks the snapshot stack and checks to amend the last snapshot.</p>\n\n<p>See <a href=\"#!/api/CKEDITOR.plugins.undo.UndoManager-method-lock\" rel=\"CKEDITOR.plugins.undo.UndoManager-method-lock\" class=\"docClass\">lock</a> for more details.</p>\n        <p>Available since: <b>4.0</b></p>\n</div></div></div><div id='method-update' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.plugins.undo.UndoManager'>CKEDITOR.plugins.undo.UndoManager</span><br/><a href='source/plugin90.html#CKEDITOR-plugins-undo-UndoManager-method-update' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.plugins.undo.UndoManager-method-update' class='name expandable'>update</a>( <span class='pre'>[newImage]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Updates the last snapshot of the undo stack with the current editor content. ...</div><div class='long'><p>Updates the last snapshot of the undo stack with the current editor content.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>newImage</span> : <a href=\"#!/api/CKEDITOR.plugins.undo.Image\" rel=\"CKEDITOR.plugins.undo.Image\" class=\"docClass\">CKEDITOR.plugins.undo.Image</a> (optional)<div class='sub-desc'><p>The image which will replace the current one.\nIf not set defaults to image taken from editor.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{"private":true}});