import '../regenerator'
import App from '../App'
import Page from '../Page'
import Behavior from '../Behavior'
import Template from '../Template'
import Component from '../Component'

import parseArgs from '../args'

import * as polyfill from '../polyfill/index'

import wx from '../wx'

const _$global$_ = Object.getPrototypeOf(global) || global

_$global$_.wx = wx

_$global$_.App = App
_$global$_.Page = Page
_$global$_.Behavior = Behavior
_$global$_.Template = Template
_$global$_.Component = Component

_$global$_._$$polyfill$$_ = polyfill

_$global$_._$$parseArgs$$_ = parseArgs

