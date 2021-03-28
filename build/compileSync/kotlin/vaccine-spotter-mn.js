(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'node-fetch'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('node-fetch'));
  else {
    if (typeof fetch === 'undefined') {
      throw new Error("Error loading module 'vaccine-spotter-mn'. Its dependency 'node-fetch' was not found. Please, check whether 'node-fetch' is loaded prior to 'vaccine-spotter-mn'.");
    }root['vaccine-spotter-mn'] = factory(typeof this['vaccine-spotter-mn'] === 'undefined' ? {} : this['vaccine-spotter-mn'], fetch);
  }
}(this, function (_, fetch) {
  'use strict';
  CoroutineSingletons.prototype = Object.create(Enum.prototype);
  CoroutineSingletons.prototype.constructor = CoroutineSingletons;
  IntProgressionIterator.prototype = Object.create(IntIterator.prototype);
  IntProgressionIterator.prototype.constructor = IntProgressionIterator;
  IntRange.prototype = Object.create(IntProgression.prototype);
  IntRange.prototype.constructor = IntRange;
  AbstractMutableCollection.prototype = Object.create(AbstractCollection.prototype);
  AbstractMutableCollection.prototype.constructor = AbstractMutableCollection;
  AbstractMutableList.prototype = Object.create(AbstractMutableCollection.prototype);
  AbstractMutableList.prototype.constructor = AbstractMutableList;
  AbstractMutableSet.prototype = Object.create(AbstractMutableCollection.prototype);
  AbstractMutableSet.prototype.constructor = AbstractMutableSet;
  AbstractEntrySet.prototype = Object.create(AbstractMutableSet.prototype);
  AbstractEntrySet.prototype.constructor = AbstractEntrySet;
  _no_name_provided__12.prototype = Object.create(AbstractMutableSet.prototype);
  _no_name_provided__12.prototype.constructor = _no_name_provided__12;
  AbstractMutableMap.prototype = Object.create(AbstractMap.prototype);
  AbstractMutableMap.prototype.constructor = AbstractMutableMap;
  ArrayList.prototype = Object.create(AbstractMutableList.prototype);
  ArrayList.prototype.constructor = ArrayList;
  EntrySet.prototype = Object.create(AbstractEntrySet.prototype);
  EntrySet.prototype.constructor = EntrySet;
  HashMap.prototype = Object.create(AbstractMutableMap.prototype);
  HashMap.prototype.constructor = HashMap;
  HashSet.prototype = Object.create(AbstractMutableSet.prototype);
  HashSet.prototype.constructor = HashSet;
  PrimitiveKClassImpl.prototype = Object.create(KClassImpl.prototype);
  PrimitiveKClassImpl.prototype.constructor = PrimitiveKClassImpl;
  NothingKClassImpl.prototype = Object.create(KClassImpl.prototype);
  NothingKClassImpl.prototype.constructor = NothingKClassImpl;
  SimpleKClassImpl.prototype = Object.create(KClassImpl.prototype);
  SimpleKClassImpl.prototype.constructor = SimpleKClassImpl;
  Long.prototype = Object.create(Number_0.prototype);
  Long.prototype.constructor = Long;
  _no_name_provided__1_0.prototype = Object.create(CoroutineImpl_0.prototype);
  _no_name_provided__1_0.prototype.constructor = _no_name_provided__1_0;
  Exception.prototype = Object.create(Error.prototype);
  Exception.prototype.constructor = Exception;
  Error_0.prototype = Object.create(Error.prototype);
  Error_0.prototype.constructor = Error_0;
  RuntimeException.prototype = Object.create(Exception.prototype);
  RuntimeException.prototype.constructor = RuntimeException;
  IllegalArgumentException.prototype = Object.create(RuntimeException.prototype);
  IllegalArgumentException.prototype.constructor = IllegalArgumentException;
  NoSuchElementException.prototype = Object.create(RuntimeException.prototype);
  NoSuchElementException.prototype.constructor = NoSuchElementException;
  IllegalStateException.prototype = Object.create(RuntimeException.prototype);
  IllegalStateException.prototype.constructor = IllegalStateException;
  UnsupportedOperationException.prototype = Object.create(RuntimeException.prototype);
  UnsupportedOperationException.prototype.constructor = UnsupportedOperationException;
  IndexOutOfBoundsException.prototype = Object.create(RuntimeException.prototype);
  IndexOutOfBoundsException.prototype.constructor = IndexOutOfBoundsException;
  ArithmeticException.prototype = Object.create(RuntimeException.prototype);
  ArithmeticException.prototype.constructor = ArithmeticException;
  NullPointerException.prototype = Object.create(RuntimeException.prototype);
  NullPointerException.prototype.constructor = NullPointerException;
  NoWhenBranchMatchedException.prototype = Object.create(RuntimeException.prototype);
  NoWhenBranchMatchedException.prototype.constructor = NoWhenBranchMatchedException;
  ClassCastException.prototype = Object.create(RuntimeException.prototype);
  ClassCastException.prototype.constructor = ClassCastException;
  UninitializedPropertyAccessException.prototype = Object.create(RuntimeException.prototype);
  UninitializedPropertyAccessException.prototype.constructor = UninitializedPropertyAccessException;
  None.prototype = Object.create(TraceBase.prototype);
  None.prototype.constructor = None;
  AbstractCoroutine.prototype = Object.create(JobSupport.prototype);
  AbstractCoroutine.prototype.constructor = AbstractCoroutine;
  StandaloneCoroutine.prototype = Object.create(AbstractCoroutine.prototype);
  StandaloneCoroutine.prototype.constructor = StandaloneCoroutine;
  LazyStandaloneCoroutine.prototype = Object.create(StandaloneCoroutine.prototype);
  LazyStandaloneCoroutine.prototype.constructor = LazyStandaloneCoroutine;
  DispatchedTask.prototype = Object.create(SchedulerTask.prototype);
  DispatchedTask.prototype.constructor = DispatchedTask;
  CancellableContinuationImpl.prototype = Object.create(DispatchedTask.prototype);
  CancellableContinuationImpl.prototype.constructor = CancellableContinuationImpl;
  CancelHandler.prototype = Object.create(CancelHandlerBase.prototype);
  CancelHandler.prototype.constructor = CancelHandler;
  BeforeResumeCancelHandler.prototype = Object.create(CancelHandler.prototype);
  BeforeResumeCancelHandler.prototype.constructor = BeforeResumeCancelHandler;
  InvokeOnCancel.prototype = Object.create(CancelHandler.prototype);
  InvokeOnCancel.prototype.constructor = InvokeOnCancel;
  CancelledContinuation.prototype = Object.create(CompletedExceptionally.prototype);
  CancelledContinuation.prototype.constructor = CancelledContinuation;
  Key_1.prototype = Object.create(AbstractCoroutineContextKey.prototype);
  Key_1.prototype.constructor = Key_1;
  CoroutineDispatcher.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  CoroutineDispatcher.prototype.constructor = CoroutineDispatcher;
  CoroutineStart.prototype = Object.create(Enum.prototype);
  CoroutineStart.prototype.constructor = CoroutineStart;
  EventLoop.prototype = Object.create(CoroutineDispatcher.prototype);
  EventLoop.prototype.constructor = EventLoop;
  CompletionHandlerException.prototype = Object.create(RuntimeException.prototype);
  CompletionHandlerException.prototype.constructor = CompletionHandlerException;
  CoroutinesInternalError.prototype = Object.create(Error_0.prototype);
  CoroutinesInternalError.prototype.constructor = CoroutinesInternalError;
  LinkedListHead.prototype = Object.create(LinkedListNode.prototype);
  LinkedListHead.prototype.constructor = LinkedListHead;
  NodeList_0.prototype = Object.create(LinkedListHead.prototype);
  NodeList_0.prototype.constructor = NodeList_0;
  CompletionHandlerBase.prototype = Object.create(LinkedListNode.prototype);
  CompletionHandlerBase.prototype.constructor = CompletionHandlerBase;
  JobNode.prototype = Object.create(CompletionHandlerBase.prototype);
  JobNode.prototype.constructor = JobNode;
  ChildCompletion.prototype = Object.create(JobNode.prototype);
  ChildCompletion.prototype.constructor = ChildCompletion;
  JobCancellingNode.prototype = Object.create(JobNode.prototype);
  JobCancellingNode.prototype.constructor = JobCancellingNode;
  ChildHandleNode.prototype = Object.create(JobCancellingNode.prototype);
  ChildHandleNode.prototype.constructor = ChildHandleNode;
  InvokeOnCancelling.prototype = Object.create(JobCancellingNode.prototype);
  InvokeOnCancelling.prototype.constructor = InvokeOnCancelling;
  InvokeOnCompletion.prototype = Object.create(JobNode.prototype);
  InvokeOnCompletion.prototype.constructor = InvokeOnCompletion;
  ChildContinuation.prototype = Object.create(JobCancellingNode.prototype);
  ChildContinuation.prototype.constructor = ChildContinuation;
  MainCoroutineDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  MainCoroutineDispatcher.prototype.constructor = MainCoroutineDispatcher;
  CancellationException.prototype = Object.create(IllegalStateException.prototype);
  CancellationException.prototype.constructor = CancellationException;
  TimeoutCancellationException.prototype = Object.create(CancellationException.prototype);
  TimeoutCancellationException.prototype.constructor = TimeoutCancellationException;
  Unconfined.prototype = Object.create(CoroutineDispatcher.prototype);
  Unconfined.prototype.constructor = Unconfined;
  DispatchedContinuation.prototype = Object.create(DispatchedTask.prototype);
  DispatchedContinuation.prototype.constructor = DispatchedContinuation;
  JsMainDispatcher.prototype = Object.create(MainCoroutineDispatcher.prototype);
  JsMainDispatcher.prototype.constructor = JsMainDispatcher;
  UnconfinedEventLoop.prototype = Object.create(EventLoop.prototype);
  UnconfinedEventLoop.prototype.constructor = UnconfinedEventLoop;
  JobCancellationException.prototype = Object.create(CancellationException.prototype);
  JobCancellationException.prototype.constructor = JobCancellationException;
  SetTimeoutBasedDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  SetTimeoutBasedDispatcher.prototype.constructor = SetTimeoutBasedDispatcher;
  NodeDispatcher.prototype = Object.create(SetTimeoutBasedDispatcher.prototype);
  NodeDispatcher.prototype.constructor = NodeDispatcher;
  SetTimeoutDispatcher.prototype = Object.create(SetTimeoutBasedDispatcher.prototype);
  SetTimeoutDispatcher.prototype.constructor = SetTimeoutDispatcher;
  MessageQueue.prototype = Object.create(ArrayQueue.prototype);
  MessageQueue.prototype.constructor = MessageQueue;
  ScheduledMessageQueue.prototype = Object.create(MessageQueue.prototype);
  ScheduledMessageQueue.prototype.constructor = ScheduledMessageQueue;
  ClearTimeout.prototype = Object.create(CancelHandler.prototype);
  ClearTimeout.prototype.constructor = ClearTimeout;
  WindowDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  WindowDispatcher.prototype.constructor = WindowDispatcher;
  WindowMessageQueue.prototype = Object.create(MessageQueue.prototype);
  WindowMessageQueue.prototype.constructor = WindowMessageQueue;
  _no_name_provided__47.prototype = Object.create(CoroutineImpl_0.prototype);
  _no_name_provided__47.prototype.constructor = _no_name_provided__47;
  function asSequence(_this_) {
    if (_this_.length === 0)
      return emptySequence();
    else {
    }
    return new _no_name_provided__1(_this_);
  }
  function indexOf(_this_, element) {
    if (element == null) {
      var inductionVariable = 0;
      var last = _this_.length - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (_this_[index] == null) {
            return index;
          }}
         while (inductionVariable <= last);
    } else {
      var inductionVariable_0 = 0;
      var last_0 = _this_.length - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          if (equals_0(element, _this_[index_0])) {
            return index_0;
          }}
         while (inductionVariable_0 <= last_0);
    }
    return -1;
  }
  function contains(_this_, element) {
    return indexOf(_this_, element) >= 0;
  }
  function joinToString(_this_, separator, prefix, postfix, limit, truncated, transform) {
    return joinTo(_this_, StringBuilder_init_$Create$_0(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function joinToString$default(_this_, separator, prefix, postfix, limit, truncated, transform, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      separator = ', ';
    if (!(($mask0 & 2) === 0))
      prefix = '';
    if (!(($mask0 & 4) === 0))
      postfix = '';
    if (!(($mask0 & 8) === 0))
      limit = -1;
    if (!(($mask0 & 16) === 0))
      truncated = '...';
    if (!(($mask0 & 32) === 0))
      transform = null;
    return joinToString(_this_, separator, prefix, postfix, limit, truncated, transform);
  }
  function joinTo(_this_, buffer, separator, prefix, postfix, limit, truncated, transform) {
    buffer.append_3(prefix);
    Unit_getInstance();
    var count = 0;
    var indexedObject = _this_;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$break: while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      count = count + 1 | 0;
      if (count > 1) {
        buffer.append_3(separator);
        Unit_getInstance();
      } else {
      }
      if (limit < 0 ? true : count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$break;
    }
    if (limit >= 0 ? count > limit : false) {
      buffer.append_3(truncated);
      Unit_getInstance();
    }buffer.append_3(postfix);
    Unit_getInstance();
    return buffer;
  }
  function _no_name_provided__1($this_asSequence) {
    this._$this_asSequence = $this_asSequence;
  }
  _no_name_provided__1.prototype.iterator_2 = function () {
    return arrayIterator(this._$this_asSequence);
  };
  _no_name_provided__1.prototype.iterator_34 = function () {
    return this.iterator_2();
  };
  _no_name_provided__1.$metadata$ = {
    simpleName: '<no name provided>_1',
    kind: 'class',
    interfaces: [Sequence]
  };
  function joinToString_0(_this_, separator, prefix, postfix, limit, truncated, transform) {
    return joinTo_0(_this_, StringBuilder_init_$Create$_0(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function joinToString$default_0(_this_, separator, prefix, postfix, limit, truncated, transform, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      separator = ', ';
    if (!(($mask0 & 2) === 0))
      prefix = '';
    if (!(($mask0 & 4) === 0))
      postfix = '';
    if (!(($mask0 & 8) === 0))
      limit = -1;
    if (!(($mask0 & 16) === 0))
      truncated = '...';
    if (!(($mask0 & 32) === 0))
      transform = null;
    return joinToString_0(_this_, separator, prefix, postfix, limit, truncated, transform);
  }
  function joinTo_0(_this_, buffer, separator, prefix, postfix, limit, truncated, transform) {
    buffer.append_3(prefix);
    Unit_getInstance();
    var count = 0;
    var tmp0_iterator = _this_.iterator_34();
    $l$break: while (tmp0_iterator.hasNext_10()) {
      var element = tmp0_iterator.next_10();
      count = count + 1 | 0;
      if (count > 1) {
        buffer.append_3(separator);
        Unit_getInstance();
      } else {
      }
      if (limit < 0 ? true : count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$break;
    }
    if (limit >= 0 ? count > limit : false) {
      buffer.append_3(truncated);
      Unit_getInstance();
    }buffer.append_3(postfix);
    Unit_getInstance();
    return buffer;
  }
  function joinTo$default(_this_, buffer, separator, prefix, postfix, limit, truncated, transform, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      separator = ', ';
    if (!(($mask0 & 4) === 0))
      prefix = '';
    if (!(($mask0 & 8) === 0))
      postfix = '';
    if (!(($mask0 & 16) === 0))
      limit = -1;
    if (!(($mask0 & 32) === 0))
      truncated = '...';
    if (!(($mask0 & 64) === 0))
      transform = null;
    return joinTo_0(_this_, buffer, separator, prefix, postfix, limit, truncated, transform);
  }
  function minOrNull(_this_) {
    var iterator = _this_.iterator_34();
    if (!iterator.hasNext_10())
      return null;
    var min = iterator.next_10();
    while (iterator.hasNext_10()) {
      var e = iterator.next_10();
      if (compareTo(min, e) > 0)
        min = e;
    }
    return min;
  }
  function single(_this_) {
    var tmp0_subject = _this_;
    if (isInterface(tmp0_subject, List))
      return single_0(_this_);
    else {
      {
        var iterator = _this_.iterator_34();
        if (!iterator.hasNext_10())
          throw NoSuchElementException_init_$Create$_0('Collection is empty.');
        var single_1 = iterator.next_10();
        if (iterator.hasNext_10())
          throw IllegalArgumentException_init_$Create$('Collection has more than one element.');
        return single_1;
      }
    }
  }
  function single_0(_this_) {
    var tmp0_subject = _this_._get_size__18();
    var tmp;
    switch (tmp0_subject) {
      case 0:
        throw NoSuchElementException_init_$Create$_0('List is empty.');
      case 1:
        tmp = _this_.get_42(0);
        break;
      default:throw IllegalArgumentException_init_$Create$('List has more than one element.');
    }
    return tmp;
  }
  function toList(_this_) {
    if (_this_._get_size__18() === 0)
      return emptyList();
    var iterator = _this_._get_entries__2().iterator_34();
    if (!iterator.hasNext_10())
      return emptyList();
    var first = iterator.next_10();
    if (!iterator.hasNext_10()) {
      return listOf(new Pair(first._get_key__18(), first._get_value__4()));
    }var result = ArrayList_init_$Create$_0(_this_._get_size__18());
    result.add_13(new Pair(first._get_key__18(), first._get_value__4()));
    Unit_getInstance();
    do {
      var tmp0_toPair_0 = iterator.next_10();
      result.add_13(new Pair(tmp0_toPair_0._get_key__18(), tmp0_toPair_0._get_value__4()));
      Unit_getInstance();
    }
     while (iterator.hasNext_10());
    return result;
  }
  function until(_this_, to_0) {
    if (to_0 <= IntCompanionObject_getInstance()._MIN_VALUE)
      return Companion_getInstance_4()._EMPTY;
    return numberRangeToNumber(_this_, to_0 - 1 | 0);
  }
  function coerceAtMost(_this_, maximumValue) {
    return _this_ > maximumValue ? maximumValue : _this_;
  }
  function coerceIn(_this_, minimumValue, maximumValue) {
    if (minimumValue > maximumValue)
      throw IllegalArgumentException_init_$Create$('' + 'Cannot coerce value to an empty range: maximum ' + maximumValue + ' is less than minimum ' + minimumValue + '.');
    if (_this_ < minimumValue)
      return minimumValue;
    if (_this_ > maximumValue)
      return maximumValue;
    return _this_;
  }
  function coerceAtLeast(_this_, minimumValue) {
    return _this_ < minimumValue ? minimumValue : _this_;
  }
  function downTo(_this_, to_0) {
    return Companion_getInstance_3().fromClosedRange(_this_, to_0, -1);
  }
  function coerceIn_0(_this_, minimumValue, maximumValue) {
    if (minimumValue.compareTo_36(maximumValue) > 0)
      throw IllegalArgumentException_init_$Create$('' + 'Cannot coerce value to an empty range: maximum ' + maximumValue + ' is less than minimum ' + minimumValue + '.');
    if (_this_.compareTo_36(minimumValue) < 0)
      return minimumValue;
    if (_this_.compareTo_36(maximumValue) > 0)
      return maximumValue;
    return _this_;
  }
  function filter(_this_, predicate) {
    return new FilteringSequence(_this_, true, predicate);
  }
  function map(_this_, transform) {
    return new TransformingSequence(_this_, transform);
  }
  function toList_0(_this_) {
    return optimizeReadOnlyList(toMutableList(_this_));
  }
  function toMutableList(_this_) {
    return toCollection(_this_, ArrayList_init_$Create$());
  }
  function toCollection(_this_, destination) {
    var tmp0_iterator = _this_.iterator_34();
    while (tmp0_iterator.hasNext_10()) {
      var item = tmp0_iterator.next_10();
      destination.add_13(item);
      Unit_getInstance();
    }
    return destination;
  }
  function drop(_this_, n) {
    var tmp0_require_0 = n >= 0;
    if (!tmp0_require_0) {
      var message_2 = '' + 'Requested character count ' + n + ' is less than zero.';
      throw IllegalArgumentException_init_$Create$(toString_1(message_2));
    }var tmp1_substring_0 = coerceAtMost(n, _this_.length);
    return _this_.substring(tmp1_substring_0);
  }
  function _no_name_provided_(this$0) {
    this._this$0 = this$0;
  }
  _no_name_provided_.prototype.invoke_0 = function (it) {
    return it === this._this$0 ? '(this Collection)' : toString_0(it);
  };
  _no_name_provided_.prototype.invoke_84 = function (p1) {
    return this.invoke_0((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided_.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function AbstractCollection() {
  }
  AbstractCollection.prototype.contains_10 = function (element) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp;
      if (isInterface(this, Collection)) {
        tmp = this.isEmpty_16();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = false;
        break l$ret$1;
      } else {
      }
      var tmp0_iterator_1 = this.iterator_34();
      while (tmp0_iterator_1.hasNext_10()) {
        var element_2 = tmp0_iterator_1.next_10();
        if (equals_0(element_2, element)) {
          tmp$ret$0 = true;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = false;
    }
     while (false);
    return tmp$ret$0;
  };
  AbstractCollection.prototype.containsAll_12 = function (elements) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.isEmpty_16();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = true;
        break l$ret$1;
      } else {
      }
      var tmp0_iterator_1 = elements.iterator_34();
      while (tmp0_iterator_1.hasNext_10()) {
        var element_2 = tmp0_iterator_1.next_10();
        if (!this.contains_10(element_2)) {
          tmp$ret$0 = false;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = true;
    }
     while (false);
    return tmp$ret$0;
  };
  AbstractCollection.prototype.isEmpty_16 = function () {
    return this._get_size__18() === 0;
  };
  AbstractCollection.prototype.toString = function () {
    return joinToString$default_0(this, ', ', '[', ']', 0, null, _no_name_provided_$factory(this), 24, null);
  };
  AbstractCollection.prototype.toArray = function () {
    return copyToArrayImpl_0(this);
  };
  AbstractCollection.$metadata$ = {
    simpleName: 'AbstractCollection',
    kind: 'class',
    interfaces: [Collection]
  };
  function _no_name_provided_$factory(this$0) {
    var i = new _no_name_provided_(this$0);
    return function (p1) {
      return i.invoke_0(p1);
    };
  }
  function Companion_0() {
    Companion_instance = this;
  }
  Companion_0.prototype.checkElementIndex = function (index, size_0) {
    if (index < 0 ? true : index >= size_0) {
      throw IndexOutOfBoundsException_init_$Create$('' + 'index: ' + index + ', size: ' + size_0);
    }};
  Companion_0.prototype.checkPositionIndex = function (index, size_0) {
    if (index < 0 ? true : index > size_0) {
      throw IndexOutOfBoundsException_init_$Create$('' + 'index: ' + index + ', size: ' + size_0);
    }};
  Companion_0.prototype.checkRangeIndexes = function (fromIndex, toIndex, size_0) {
    if (fromIndex < 0 ? true : toIndex > size_0) {
      throw IndexOutOfBoundsException_init_$Create$('' + 'fromIndex: ' + fromIndex + ', toIndex: ' + toIndex + ', size: ' + size_0);
    }if (fromIndex > toIndex) {
      throw IllegalArgumentException_init_$Create$('' + 'fromIndex: ' + fromIndex + ' > toIndex: ' + toIndex);
    }};
  Companion_0.prototype.orderedHashCode = function (c) {
    var hashCode_1 = 1;
    var tmp0_iterator = c.iterator_34();
    while (tmp0_iterator.hasNext_10()) {
      var e = tmp0_iterator.next_10();
      var tmp = imul(31, hashCode_1);
      var tmp1_safe_receiver = e;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : hashCode(tmp1_safe_receiver);
      hashCode_1 = tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
    }
    return hashCode_1;
  };
  Companion_0.prototype.orderedEquals = function (c, other) {
    if (!(c._get_size__18() === other._get_size__18()))
      return false;
    var otherIterator = other.iterator_34();
    var tmp0_iterator = c.iterator_34();
    while (tmp0_iterator.hasNext_10()) {
      var elem = tmp0_iterator.next_10();
      var elemOther = otherIterator.next_10();
      if (!equals_0(elem, elemOther)) {
        return false;
      }}
    return true;
  };
  Companion_0.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion_0();
    return Companion_instance;
  }
  function toString($this, o) {
    return o === $this ? '(this Map)' : toString_0(o);
  }
  function implFindEntry($this, key) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_firstOrNull_0 = $this._get_entries__2();
      var tmp0_iterator_1 = tmp0_firstOrNull_0.iterator_34();
      while (tmp0_iterator_1.hasNext_10()) {
        var element_2 = tmp0_iterator_1.next_10();
        if (equals_0(element_2._get_key__18(), key)) {
          tmp$ret$0 = element_2;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = null;
    }
     while (false);
    return tmp$ret$0;
  }
  function Companion_1() {
    Companion_instance_0 = this;
  }
  Companion_1.prototype.entryHashCode = function (e) {
    var tmp2_safe_receiver_4 = e._get_key__18();
    var tmp3_elvis_lhs_3 = tmp2_safe_receiver_4 == null ? null : hashCode(tmp2_safe_receiver_4);
    var tmp = tmp3_elvis_lhs_3 == null ? 0 : tmp3_elvis_lhs_3;
    var tmp0_safe_receiver_6 = e._get_value__4();
    var tmp1_elvis_lhs_5 = tmp0_safe_receiver_6 == null ? null : hashCode(tmp0_safe_receiver_6);
    return tmp ^ (tmp1_elvis_lhs_5 == null ? 0 : tmp1_elvis_lhs_5);
  };
  Companion_1.prototype.entryToString = function (e) {
    return '' + e._get_key__18() + '=' + e._get_value__4();
  };
  Companion_1.prototype.entryEquals = function (e, other) {
    if (!(!(other == null) ? isInterface(other, Entry) : false))
      return false;
    else {
    }
    return equals_0(e._get_key__18(), other._get_key__18()) ? equals_0(e._get_value__4(), other._get_value__4()) : false;
  };
  Companion_1.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_1();
    return Companion_instance_0;
  }
  function _no_name_provided__0(this$0) {
    this._this$0_0 = this$0;
  }
  _no_name_provided__0.prototype.invoke_2 = function (it) {
    return this._this$0_0.toString_0(it);
  };
  _no_name_provided__0.prototype.invoke_84 = function (p1) {
    return this.invoke_2((!(p1 == null) ? isInterface(p1, Entry) : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__0.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function AbstractMap() {
    Companion_getInstance_0();
    this.__keys = null;
    this.__values = null;
  }
  AbstractMap.prototype.containsKey_2 = function (key) {
    return !(implFindEntry(this, key) == null);
  };
  AbstractMap.prototype.containsEntry_3 = function (entry) {
    if (!(!(entry == null) ? isInterface(entry, Entry) : false))
      return false;
    else {
    }
    var key = entry._get_key__18();
    var value = entry._get_value__4();
    var ourValue = (isInterface(this, Map_0) ? this : THROW_CCE()).get_17(key);
    if (!equals_0(value, ourValue)) {
      return false;
    }var tmp;
    if (ourValue == null) {
      tmp = !(isInterface(this, Map_0) ? this : THROW_CCE()).containsKey_2(key);
    } else {
      tmp = false;
    }
    if (tmp) {
      return false;
    } else {
    }
    return true;
  };
  AbstractMap.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, Map_0) : false))
      return false;
    else {
    }
    if (!(this._get_size__18() === other._get_size__18()))
      return false;
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_all_0 = other._get_entries__2();
      var tmp;
      if (isInterface(tmp0_all_0, Collection)) {
        tmp = tmp0_all_0.isEmpty_16();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = true;
        break l$ret$1;
      } else {
      }
      var tmp0_iterator_1 = tmp0_all_0.iterator_34();
      while (tmp0_iterator_1.hasNext_10()) {
        var element_2 = tmp0_iterator_1.next_10();
        if (!this.containsEntry_3(element_2)) {
          tmp$ret$0 = false;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = true;
    }
     while (false);
    return tmp$ret$0;
  };
  AbstractMap.prototype.get_17 = function (key) {
    var tmp0_safe_receiver = implFindEntry(this, key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_value__4();
  };
  AbstractMap.prototype.hashCode = function () {
    return hashCode(this._get_entries__2());
  };
  AbstractMap.prototype.isEmpty_16 = function () {
    return this._get_size__18() === 0;
  };
  AbstractMap.prototype._get_size__18 = function () {
    return this._get_entries__2()._get_size__18();
  };
  AbstractMap.prototype.toString = function () {
    var tmp = this._get_entries__2();
    return joinToString$default_0(tmp, ', ', '{', '}', 0, null, _no_name_provided_$factory_0(this), 24, null);
  };
  AbstractMap.prototype.toString_0 = function (entry) {
    return toString(this, entry._get_key__18()) + '=' + toString(this, entry._get_value__4());
  };
  AbstractMap.$metadata$ = {
    simpleName: 'AbstractMap',
    kind: 'class',
    interfaces: [Map_0]
  };
  function _no_name_provided_$factory_0(this$0) {
    var i = new _no_name_provided__0(this$0);
    return function (p1) {
      return i.invoke_2(p1);
    };
  }
  function Companion_2() {
    Companion_instance_1 = this;
  }
  Companion_2.prototype.unorderedHashCode = function (c) {
    var hashCode_1 = 0;
    var tmp0_iterator = c.iterator_34();
    while (tmp0_iterator.hasNext_10()) {
      var element = tmp0_iterator.next_10();
      var tmp = hashCode_1;
      var tmp1_safe_receiver = element;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : hashCode(tmp1_safe_receiver);
      hashCode_1 = tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
    }
    return hashCode_1;
  };
  Companion_2.prototype.setEquals = function (c, other) {
    if (!(c._get_size__18() === other._get_size__18()))
      return false;
    return c.containsAll_12(other);
  };
  Companion_2.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_2();
    return Companion_instance_1;
  }
  function _get_lastIndex_(_this_) {
    return _this_._get_size__18() - 1 | 0;
  }
  function emptyList() {
    return EmptyList_getInstance();
  }
  function EmptyIterator() {
    EmptyIterator_instance = this;
  }
  EmptyIterator.prototype.hasNext_10 = function () {
    return false;
  };
  EmptyIterator.prototype.next_10 = function () {
    throw NoSuchElementException_init_$Create$();
  };
  EmptyIterator.$metadata$ = {
    simpleName: 'EmptyIterator',
    kind: 'object',
    interfaces: [ListIterator]
  };
  var EmptyIterator_instance;
  function EmptyIterator_getInstance() {
    if (EmptyIterator_instance == null)
      new EmptyIterator();
    return EmptyIterator_instance;
  }
  function arrayListOf(elements) {
    return elements.length === 0 ? ArrayList_init_$Create$() : ArrayList_init_$Create$_1(new ArrayAsCollection(elements, true));
  }
  function EmptyList() {
    EmptyList_instance = this;
    this._serialVersionUID = new Long(-1478467534, -1720727600);
  }
  EmptyList.prototype.equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, List) : false) {
      tmp = other.isEmpty_16();
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  EmptyList.prototype.hashCode = function () {
    return 1;
  };
  EmptyList.prototype.toString = function () {
    return '[]';
  };
  EmptyList.prototype._get_size__18 = function () {
    return 0;
  };
  EmptyList.prototype.isEmpty_16 = function () {
    return true;
  };
  EmptyList.prototype.containsAll_0 = function (elements) {
    return elements.isEmpty_16();
  };
  EmptyList.prototype.containsAll_12 = function (elements) {
    return this.containsAll_0(elements);
  };
  EmptyList.prototype.get_42 = function (index) {
    throw IndexOutOfBoundsException_init_$Create$('' + "Empty list doesn't contain element at index " + index + '.');
  };
  EmptyList.prototype.iterator_34 = function () {
    return EmptyIterator_getInstance();
  };
  EmptyList.$metadata$ = {
    simpleName: 'EmptyList',
    kind: 'object',
    interfaces: [List, Serializable, RandomAccess]
  };
  var EmptyList_instance;
  function EmptyList_getInstance() {
    if (EmptyList_instance == null)
      new EmptyList();
    return EmptyList_instance;
  }
  function ArrayAsCollection(values, isVarargs) {
    this._values = values;
    this._isVarargs = isVarargs;
  }
  ArrayAsCollection.prototype._get_size__18 = function () {
    return this._values.length;
  };
  ArrayAsCollection.prototype.isEmpty_16 = function () {
    var tmp0_isEmpty_0 = this._values;
    return tmp0_isEmpty_0.length === 0;
  };
  ArrayAsCollection.prototype.contains_1 = function (element) {
    return contains(this._values, element);
  };
  ArrayAsCollection.prototype.containsAll_2 = function (elements) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.isEmpty_16();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = true;
        break l$ret$1;
      } else {
      }
      var tmp0_iterator_1 = elements.iterator_34();
      while (tmp0_iterator_1.hasNext_10()) {
        var element_2 = tmp0_iterator_1.next_10();
        if (!this.contains_1(element_2)) {
          tmp$ret$0 = false;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = true;
    }
     while (false);
    return tmp$ret$0;
  };
  ArrayAsCollection.prototype.containsAll_12 = function (elements) {
    return this.containsAll_2(elements);
  };
  ArrayAsCollection.prototype.iterator_34 = function () {
    return arrayIterator(this._values);
  };
  ArrayAsCollection.$metadata$ = {
    simpleName: 'ArrayAsCollection',
    kind: 'class',
    interfaces: [Collection]
  };
  function optimizeReadOnlyList(_this_) {
    var tmp0_subject = _this_._get_size__18();
    switch (tmp0_subject) {
      case 0:
        return emptyList();
      case 1:
        return listOf(_this_.get_42(0));
      default:return _this_;
    }
  }
  function throwIndexOverflow() {
    throw ArithmeticException_init_$Create$('Index overflow has happened.');
  }
  function collectionSizeOrDefault(_this_, default_0) {
    var tmp;
    if (isInterface(_this_, Collection)) {
      tmp = _this_._get_size__18();
    } else {
      {
        tmp = default_0;
      }
    }
    return tmp;
  }
  function addAll(_this_, elements) {
    var tmp0_subject = elements;
    if (isInterface(tmp0_subject, Collection))
      return _this_.addAll_8(elements);
    else {
      {
        var result = false;
        var tmp1_iterator = elements.iterator_34();
        while (tmp1_iterator.hasNext_10()) {
          var item = tmp1_iterator.next_10();
          if (_this_.add_13(item))
            result = true;
        }
        return result;
      }
    }
  }
  function Sequence() {
  }
  Sequence.$metadata$ = {
    simpleName: 'Sequence',
    kind: 'interface',
    interfaces: []
  };
  function calcNext($this) {
    while ($this._iterator.hasNext_10()) {
      var item = $this._iterator.next_10();
      if ($this._this$0_1._predicate(item) === $this._this$0_1._sendWhen) {
        $this._nextItem = item;
        $this._nextState = 1;
        return Unit_getInstance();
      }}
    $this._nextState = 0;
  }
  function _no_name_provided__2(this$0) {
    this._this$0_1 = this$0;
    this._iterator = this._this$0_1._sequence.iterator_34();
    this._nextState = -1;
    this._nextItem = null;
  }
  _no_name_provided__2.prototype.next_10 = function () {
    if (this._nextState === -1)
      calcNext(this);
    if (this._nextState === 0)
      throw NoSuchElementException_init_$Create$();
    var result = this._nextItem;
    this._nextItem = null;
    this._nextState = -1;
    return (result == null ? true : isObject(result)) ? result : THROW_CCE();
  };
  _no_name_provided__2.prototype.hasNext_10 = function () {
    if (this._nextState === -1)
      calcNext(this);
    return this._nextState === 1;
  };
  _no_name_provided__2.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator]
  };
  function FilteringSequence(sequence, sendWhen, predicate) {
    this._sequence = sequence;
    this._sendWhen = sendWhen;
    this._predicate = predicate;
  }
  FilteringSequence.prototype.iterator_34 = function () {
    return new _no_name_provided__2(this);
  };
  FilteringSequence.$metadata$ = {
    simpleName: 'FilteringSequence',
    kind: 'class',
    interfaces: [Sequence]
  };
  function _no_name_provided__3(this$0) {
    this._this$0_2 = this$0;
    this._iterator_0 = this._this$0_2._sequence_0.iterator_34();
  }
  _no_name_provided__3.prototype.next_10 = function () {
    return this._this$0_2._transformer(this._iterator_0.next_10());
  };
  _no_name_provided__3.prototype.hasNext_10 = function () {
    return this._iterator_0.hasNext_10();
  };
  _no_name_provided__3.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator]
  };
  function TransformingSequence(sequence, transformer) {
    this._sequence_0 = sequence;
    this._transformer = transformer;
  }
  TransformingSequence.prototype.iterator_34 = function () {
    return new _no_name_provided__3(this);
  };
  TransformingSequence.$metadata$ = {
    simpleName: 'TransformingSequence',
    kind: 'class',
    interfaces: [Sequence]
  };
  function emptySequence() {
    return EmptySequence_getInstance();
  }
  function EmptySequence() {
    EmptySequence_instance = this;
  }
  EmptySequence.prototype.iterator_34 = function () {
    return EmptyIterator_getInstance();
  };
  EmptySequence.$metadata$ = {
    simpleName: 'EmptySequence',
    kind: 'object',
    interfaces: [Sequence, DropTakeSequence]
  };
  var EmptySequence_instance;
  function EmptySequence_getInstance() {
    if (EmptySequence_instance == null)
      new EmptySequence();
    return EmptySequence_instance;
  }
  function DropTakeSequence() {
  }
  DropTakeSequence.$metadata$ = {
    simpleName: 'DropTakeSequence',
    kind: 'interface',
    interfaces: [Sequence]
  };
  function Continuation() {
  }
  Continuation.$metadata$ = {
    simpleName: 'Continuation',
    kind: 'interface',
    interfaces: []
  };
  function startCoroutine(_this_, receiver, completion) {
    var tmp0_resume_0 = intercepted(createCoroutineUnintercepted(_this_, receiver, completion));
    var tmp1_resume_0 = Unit_getInstance();
    var tmp0_success_0_1 = Companion_getInstance_2();
    tmp0_resume_0.resumeWith_8(_Result___init__impl_(Unit_getInstance()));
  }
  function Key() {
    Key_instance = this;
  }
  Key.$metadata$ = {
    simpleName: 'Key',
    kind: 'object',
    interfaces: [Key_0]
  };
  var Key_instance;
  function Key_getInstance() {
    if (Key_instance == null)
      new Key();
    return Key_instance;
  }
  function ContinuationInterceptor() {
  }
  ContinuationInterceptor.prototype.releaseInterceptedContinuation_9 = function (continuation) {
  };
  ContinuationInterceptor.prototype.get_31 = function (key) {
    if (key instanceof AbstractCoroutineContextKey) {
      var tmp;
      if (key.isSubKey_0(this._get_key__18())) {
        var tmp_0 = key.tryCast_0(this);
        tmp = (!(tmp_0 == null) ? isInterface(tmp_0, Element_0) : false) ? tmp_0 : null;
      } else {
        tmp = null;
      }
      return tmp;
    } else {
    }
    var tmp_1;
    if (Key_getInstance() === key) {
      tmp_1 = isInterface(this, Element_0) ? this : THROW_CCE();
    } else {
      tmp_1 = null;
    }
    return tmp_1;
  };
  ContinuationInterceptor.prototype.minusKey_18 = function (key) {
    if (key instanceof AbstractCoroutineContextKey) {
      return (key.isSubKey_0(this._get_key__18()) ? !(key.tryCast_0(this) == null) : false) ? EmptyCoroutineContext_getInstance() : this;
    } else {
    }
    return Key_getInstance() === key ? EmptyCoroutineContext_getInstance() : this;
  };
  ContinuationInterceptor.$metadata$ = {
    simpleName: 'ContinuationInterceptor',
    kind: 'interface',
    interfaces: [Element_0]
  };
  function Key_0() {
  }
  Key_0.$metadata$ = {
    simpleName: 'Key',
    kind: 'interface',
    interfaces: []
  };
  function Element_0() {
  }
  Element_0.prototype.get_31 = function (key) {
    var tmp;
    if (equals_0(this._get_key__18(), key)) {
      tmp = isInterface(this, Element_0) ? this : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  };
  Element_0.prototype.fold_17 = function (initial, operation) {
    return operation(initial, this);
  };
  Element_0.prototype.minusKey_18 = function (key) {
    return equals_0(this._get_key__18(), key) ? EmptyCoroutineContext_getInstance() : this;
  };
  Element_0.$metadata$ = {
    simpleName: 'Element',
    kind: 'interface',
    interfaces: [CoroutineContext]
  };
  function _no_name_provided__4() {
  }
  _no_name_provided__4.prototype.invoke_4 = function (acc, element) {
    var removed = acc.minusKey_18(element._get_key__18());
    var tmp;
    if (removed === EmptyCoroutineContext_getInstance()) {
      tmp = element;
    } else {
      var interceptor = removed.get_31(Key_getInstance());
      var tmp_0;
      if (interceptor == null) {
        tmp_0 = new CombinedContext(removed, element);
      } else {
        var left = removed.minusKey_18(Key_getInstance());
        tmp_0 = left === EmptyCoroutineContext_getInstance() ? new CombinedContext(element, interceptor) : new CombinedContext(new CombinedContext(left, element), interceptor);
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  _no_name_provided__4.prototype.invoke_15 = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineContext) : false) ? p1 : THROW_CCE();
    return this.invoke_4(tmp, (!(p2 == null) ? isInterface(p2, Element_0) : false) ? p2 : THROW_CCE());
  };
  _no_name_provided__4.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function CoroutineContext() {
  }
  CoroutineContext.prototype.plus_17 = function (context) {
    var tmp;
    if (context === EmptyCoroutineContext_getInstance()) {
      tmp = this;
    } else {
      tmp = context.fold_17(this, _no_name_provided_$factory_1());
    }
    return tmp;
  };
  CoroutineContext.$metadata$ = {
    simpleName: 'CoroutineContext',
    kind: 'interface',
    interfaces: []
  };
  function _no_name_provided_$factory_1() {
    var i = new _no_name_provided__4();
    return function (p1, p2) {
      return i.invoke_4(p1, p2);
    };
  }
  function EmptyCoroutineContext() {
    EmptyCoroutineContext_instance = this;
    this._serialVersionUID_0 = new Long(0, 0);
  }
  EmptyCoroutineContext.prototype.get_31 = function (key) {
    return null;
  };
  EmptyCoroutineContext.prototype.fold_17 = function (initial, operation) {
    return initial;
  };
  EmptyCoroutineContext.prototype.plus_17 = function (context) {
    return context;
  };
  EmptyCoroutineContext.prototype.minusKey_18 = function (key) {
    return this;
  };
  EmptyCoroutineContext.prototype.hashCode = function () {
    return 0;
  };
  EmptyCoroutineContext.prototype.toString = function () {
    return 'EmptyCoroutineContext';
  };
  EmptyCoroutineContext.$metadata$ = {
    simpleName: 'EmptyCoroutineContext',
    kind: 'object',
    interfaces: [CoroutineContext, Serializable]
  };
  var EmptyCoroutineContext_instance;
  function EmptyCoroutineContext_getInstance() {
    if (EmptyCoroutineContext_instance == null)
      new EmptyCoroutineContext();
    return EmptyCoroutineContext_instance;
  }
  function size($this) {
    var cur = $this;
    var size_0 = 2;
    while (true) {
      var tmp = cur._left;
      var tmp0_elvis_lhs = tmp instanceof CombinedContext ? tmp : null;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        return size_0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      cur = tmp_0;
      var tmp1 = size_0;
      size_0 = tmp1 + 1 | 0;
      Unit_getInstance();
    }
  }
  function contains_0($this, element) {
    return equals_0($this.get_31(element._get_key__18()), element);
  }
  function containsAll($this, context) {
    var cur = context;
    while (true) {
      if (!contains_0($this, cur._element))
        return false;
      var next = cur._left;
      if (next instanceof CombinedContext) {
        cur = next;
      } else {
        {
          return contains_0($this, isInterface(next, Element_0) ? next : THROW_CCE());
        }
      }
    }
  }
  function _no_name_provided__5() {
  }
  _no_name_provided__5.prototype.invoke_6 = function (acc, element) {
    var tmp;
    if (charSequenceLength(acc) === 0) {
      tmp = toString_1(element);
    } else {
      {
        tmp = '' + acc + ', ' + element;
      }
    }
    return tmp;
  };
  _no_name_provided__5.prototype.invoke_15 = function (p1, p2) {
    var tmp = (!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE();
    return this.invoke_6(tmp, (!(p2 == null) ? isInterface(p2, Element_0) : false) ? p2 : THROW_CCE());
  };
  _no_name_provided__5.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function CombinedContext(left, element) {
    this._left = left;
    this._element = element;
  }
  CombinedContext.prototype.get_31 = function (key) {
    var cur = this;
    while (true) {
      var tmp0_safe_receiver = cur._element.get_31(key);
      if (tmp0_safe_receiver == null)
        null;
      else {
        return tmp0_safe_receiver;
      }
      Unit_getInstance();
      var next = cur._left;
      if (next instanceof CombinedContext) {
        cur = next;
      } else {
        {
          return next.get_31(key);
        }
      }
    }
  };
  CombinedContext.prototype.fold_17 = function (initial, operation) {
    return operation(this._left.fold_17(initial, operation), this._element);
  };
  CombinedContext.prototype.minusKey_18 = function (key) {
    var tmp0_safe_receiver = this._element.get_31(key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      return this._left;
    }
    Unit_getInstance();
    var newLeft = this._left.minusKey_18(key);
    return newLeft === this._left ? this : newLeft === EmptyCoroutineContext_getInstance() ? this._element : new CombinedContext(newLeft, this._element);
  };
  CombinedContext.prototype.equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      if (other instanceof CombinedContext) {
        tmp_1 = size(other) === size(this);
      } else {
        {
          tmp_1 = false;
        }
      }
      if (tmp_1) {
        tmp_0 = containsAll(other, this);
      } else {
        {
          tmp_0 = false;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  CombinedContext.prototype.hashCode = function () {
    return hashCode(this._left) + hashCode(this._element) | 0;
  };
  CombinedContext.prototype.toString = function () {
    return '[' + this.fold_17('', _no_name_provided_$factory_2()) + ']';
  };
  CombinedContext.$metadata$ = {
    simpleName: 'CombinedContext',
    kind: 'class',
    interfaces: [CoroutineContext, Serializable]
  };
  function AbstractCoroutineContextKey(baseKey, safeCast) {
    this._safeCast = safeCast;
    var tmp = this;
    var tmp_0;
    if (baseKey instanceof AbstractCoroutineContextKey) {
      tmp_0 = baseKey._topmostKey;
    } else {
      {
        tmp_0 = baseKey;
      }
    }
    tmp._topmostKey = tmp_0;
  }
  AbstractCoroutineContextKey.prototype.tryCast_0 = function (element) {
    return this._safeCast(element);
  };
  AbstractCoroutineContextKey.prototype.isSubKey_0 = function (key) {
    return key === this ? true : this._topmostKey === key;
  };
  AbstractCoroutineContextKey.$metadata$ = {
    simpleName: 'AbstractCoroutineContextKey',
    kind: 'class',
    interfaces: [Key_0]
  };
  function AbstractCoroutineContextElement(key) {
    this._key = key;
  }
  AbstractCoroutineContextElement.prototype._get_key__18 = function () {
    return this._key;
  };
  AbstractCoroutineContextElement.$metadata$ = {
    simpleName: 'AbstractCoroutineContextElement',
    kind: 'class',
    interfaces: [Element_0]
  };
  function _no_name_provided_$factory_2() {
    var i = new _no_name_provided__5();
    return function (p1, p2) {
      return i.invoke_6(p1, p2);
    };
  }
  function _get_COROUTINE_SUSPENDED_() {
    return CoroutineSingletons_COROUTINE_SUSPENDED_getInstance();
  }
  var CoroutineSingletons_COROUTINE_SUSPENDED_instance;
  var CoroutineSingletons_UNDECIDED_instance;
  var CoroutineSingletons_RESUMED_instance;
  var CoroutineSingletons_entriesInitialized;
  function CoroutineSingletons_initEntries() {
    if (CoroutineSingletons_entriesInitialized)
      return Unit_getInstance();
    CoroutineSingletons_entriesInitialized = true;
    CoroutineSingletons_COROUTINE_SUSPENDED_instance = new CoroutineSingletons('COROUTINE_SUSPENDED', 0);
    CoroutineSingletons_UNDECIDED_instance = new CoroutineSingletons('UNDECIDED', 1);
    CoroutineSingletons_RESUMED_instance = new CoroutineSingletons('RESUMED', 2);
  }
  function CoroutineSingletons(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  CoroutineSingletons.$metadata$ = {
    simpleName: 'CoroutineSingletons',
    kind: 'class',
    interfaces: []
  };
  function CoroutineSingletons_COROUTINE_SUSPENDED_getInstance() {
    CoroutineSingletons_initEntries();
    return CoroutineSingletons_COROUTINE_SUSPENDED_instance;
  }
  function KClassifier() {
  }
  KClassifier.$metadata$ = {
    simpleName: 'KClassifier',
    kind: 'interface',
    interfaces: []
  };
  function appendElement(_this_, element, transform) {
    if (!(transform == null)) {
      _this_.append_3(transform(element));
      Unit_getInstance();
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this_.append_3(element);
        Unit_getInstance();
      } else {
        if (element instanceof Char) {
          _this_.append_2(element);
          Unit_getInstance();
        } else {
          {
            _this_.append_3(toString_0(element));
            Unit_getInstance();
          }
        }
      }
    }
  }
  function equals(_this_, other, ignoreCase) {
    if (_this_.equals(other))
      return true;
    if (!ignoreCase)
      return false;
    if (uppercaseChar(_this_).equals(uppercaseChar(other)))
      return true;
    var tmp0_asDynamic_0 = _this_.toString();
    var tmp1_unsafeCast_0 = tmp0_asDynamic_0.toLowerCase().charCodeAt(0);
    var tmp = numberToChar(tmp1_unsafeCast_0);
    var tmp2_asDynamic_0 = other.toString();
    var tmp3_unsafeCast_0 = tmp2_asDynamic_0.toLowerCase().charCodeAt(0);
    if (tmp.equals(numberToChar(tmp3_unsafeCast_0)))
      return true;
    else {
    }
    return false;
  }
  function trimIndent(_this_) {
    return replaceIndent(_this_, '');
  }
  function replaceIndent(_this_, newIndent) {
    var lines_0 = lines(_this_);
    var tmp0_filterTo_0_1 = ArrayList_init_$Create$();
    var tmp0_iterator_1_2 = lines_0.iterator_34();
    while (tmp0_iterator_1_2.hasNext_10()) {
      var element_2_3 = tmp0_iterator_1_2.next_10();
      if (isNotBlank(element_2_3)) {
        tmp0_filterTo_0_1.add_13(element_2_3);
        Unit_getInstance();
      }}
    var tmp0_map_0 = tmp0_filterTo_0_1;
    var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map_0, 10));
    var tmp0_iterator_1_2_0 = tmp0_map_0.iterator_34();
    while (tmp0_iterator_1_2_0.hasNext_10()) {
      var item_2_3 = tmp0_iterator_1_2_0.next_10();
      tmp0_mapTo_0_1.add_13(indentWidth(item_2_3));
      Unit_getInstance();
    }
    var tmp0_elvis_lhs = minOrNull(tmp0_mapTo_0_1);
    var minCommonIndent = tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
    var tmp1_reindent_0 = _this_.length + imul(newIndent.length, lines_0._get_size__18()) | 0;
    var tmp2_reindent_0 = getIndentFunction(newIndent);
    var lastIndex_1 = _get_lastIndex_(lines_0);
    var tmp1_mapIndexedNotNullTo_0_1 = ArrayList_init_$Create$();
    var index_1_2 = 0;
    var tmp0_iterator_2_3 = lines_0.iterator_34();
    while (tmp0_iterator_2_3.hasNext_10()) {
      var item_3_4 = tmp0_iterator_2_3.next_10();
      var tmp1_4_6 = index_1_2;
      index_1_2 = tmp1_4_6 + 1 | 0;
      var tmp0__anonymous__1_5_5 = checkIndexOverflow(tmp1_4_6);
      var tmp;
      if ((tmp0__anonymous__1_5_5 === 0 ? true : tmp0__anonymous__1_5_5 === lastIndex_1) ? isBlank(item_3_4) : false) {
        tmp = null;
      } else {
        var tmp0_safe_receiver_4_10 = drop(item_3_4, minCommonIndent);
        var tmp_0;
        if (tmp0_safe_receiver_4_10 == null) {
          tmp_0 = null;
        } else {
          tmp_0 = tmp2_reindent_0(tmp0_safe_receiver_4_10);
        }
        var tmp1_elvis_lhs_3_9 = tmp_0;
        tmp = tmp1_elvis_lhs_3_9 == null ? item_3_4 : tmp1_elvis_lhs_3_9;
      }
      var tmp0_safe_receiver_2_6_7 = tmp;
      if (tmp0_safe_receiver_2_6_7 == null)
        null;
      else {
        tmp1_mapIndexedNotNullTo_0_1.add_13(tmp0_safe_receiver_2_6_7);
        Unit_getInstance();
      }
      Unit_getInstance();
    }
    var tmp_1 = StringBuilder_init_$Create$(tmp1_reindent_0);
    return joinTo$default(tmp1_mapIndexedNotNullTo_0_1, tmp_1, '\n', null, null, 0, null, null, 124, null).toString();
  }
  function indentWidth(_this_) {
    var tmp$ret$0;
    l$ret$1: do {
      var inductionVariable = 0;
      var last = charSequenceLength(_this_) - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index_2 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp0__anonymous__3 = charSequenceGet(_this_, index_2);
          if (!isWhitespace(tmp0__anonymous__3)) {
            tmp$ret$0 = index_2;
            break l$ret$1;
          } else {
          }
        }
         while (inductionVariable <= last);
      tmp$ret$0 = -1;
    }
     while (false);
    var tmp1_let_0 = tmp$ret$0;
    return tmp1_let_0 === -1 ? _this_.length : tmp1_let_0;
  }
  function getIndentFunction(indent) {
    var tmp;
    if (charSequenceLength(indent) === 0) {
      tmp = _no_name_provided_$factory_3();
    } else {
      {
        tmp = _no_name_provided_$factory_4(indent);
      }
    }
    return tmp;
  }
  function _no_name_provided__6() {
  }
  _no_name_provided__6.prototype.invoke_10 = function (line) {
    return line;
  };
  _no_name_provided__6.prototype.invoke_84 = function (p1) {
    return this.invoke_10((!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__6.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__7($indent) {
    this._$indent = $indent;
  }
  _no_name_provided__7.prototype.invoke_10 = function (line) {
    return this._$indent + line;
  };
  _no_name_provided__7.prototype.invoke_84 = function (p1) {
    return this.invoke_10((!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__7.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_3() {
    var i = new _no_name_provided__6();
    return function (p1) {
      return i.invoke_10(p1);
    };
  }
  function _no_name_provided_$factory_4($indent) {
    var i = new _no_name_provided__7($indent);
    return function (p1) {
      return i.invoke_10(p1);
    };
  }
  function lines(_this_) {
    return toList_0(lineSequence(_this_));
  }
  function isNotBlank(_this_) {
    return !isBlank(_this_);
  }
  function _get_lastIndex__0(_this_) {
    return charSequenceLength(_this_) - 1 | 0;
  }
  function lineSequence(_this_) {
    var tmp = ['\r\n', '\n', '\r'];
    return splitToSequence$default(_this_, tmp, false, 0, 6, null);
  }
  function splitToSequence(_this_, delimiters, ignoreCase, limit) {
    var tmp = rangesDelimitedBy$default(_this_, delimiters, 0, ignoreCase, limit, 2, null);
    return map(tmp, _no_name_provided_$factory_5(_this_));
  }
  function splitToSequence$default(_this_, delimiters, ignoreCase, limit, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      ignoreCase = false;
    if (!(($mask0 & 4) === 0))
      limit = 0;
    return splitToSequence(_this_, delimiters, ignoreCase, limit);
  }
  function substring(_this_, range) {
    return toString_1(charSequenceSubSequence(_this_, range._get_start_(), range._get_endInclusive_() + 1 | 0));
  }
  function rangesDelimitedBy(_this_, delimiters, startIndex, ignoreCase, limit) {
    var tmp0_require_0 = limit >= 0;
    if (!tmp0_require_0) {
      var message_2 = '' + 'Limit must be non-negative, but was ' + limit + '.';
      throw IllegalArgumentException_init_$Create$(toString_1(message_2));
    }var delimitersList = asList(delimiters);
    return new DelimitedRangesSequence(_this_, startIndex, limit, _no_name_provided_$factory_6(delimitersList, ignoreCase));
  }
  function rangesDelimitedBy$default(_this_, delimiters, startIndex, ignoreCase, limit, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = 0;
    if (!(($mask0 & 4) === 0))
      ignoreCase = false;
    if (!(($mask0 & 8) === 0))
      limit = 0;
    return rangesDelimitedBy(_this_, delimiters, startIndex, ignoreCase, limit);
  }
  function calcNext_0($this) {
    if ($this._nextSearchIndex < 0) {
      $this._nextState_0 = 0;
      $this._nextItem_0 = null;
    } else {
      var tmp;
      var tmp_0;
      if ($this._this$0_3._limit > 0) {
        var tmp0_this = $this;
        tmp0_this._counter = tmp0_this._counter + 1 | 0;
        tmp_0 = tmp0_this._counter >= $this._this$0_3._limit;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = true;
      } else {
        {
          tmp = $this._nextSearchIndex > charSequenceLength($this._this$0_3._input);
        }
      }
      if (tmp) {
        $this._nextItem_0 = numberRangeToNumber($this._currentStartIndex, _get_lastIndex__0($this._this$0_3._input));
        $this._nextSearchIndex = -1;
      } else {
        {
          var match = $this._this$0_3._getNextMatch($this._this$0_3._input, $this._nextSearchIndex);
          if (match == null) {
            $this._nextItem_0 = numberRangeToNumber($this._currentStartIndex, _get_lastIndex__0($this._this$0_3._input));
            $this._nextSearchIndex = -1;
          } else {
            var tmp1_container = match;
            var index = tmp1_container.component1();
            var length = tmp1_container.component2();
            $this._nextItem_0 = until($this._currentStartIndex, index);
            $this._currentStartIndex = index + length | 0;
            $this._nextSearchIndex = $this._currentStartIndex + (length === 0 ? 1 : 0) | 0;
          }
        }
      }
      $this._nextState_0 = 1;
    }
  }
  function _no_name_provided__8(this$0) {
    this._this$0_3 = this$0;
    this._nextState_0 = -1;
    this._currentStartIndex = coerceIn(this._this$0_3._startIndex, 0, charSequenceLength(this._this$0_3._input));
    this._nextSearchIndex = this._currentStartIndex;
    this._nextItem_0 = null;
    this._counter = 0;
  }
  _no_name_provided__8.prototype.next_10 = function () {
    if (this._nextState_0 === -1)
      calcNext_0(this);
    if (this._nextState_0 === 0)
      throw NoSuchElementException_init_$Create$();
    var tmp = this._nextItem_0;
    var result = tmp instanceof IntRange ? tmp : THROW_CCE();
    this._nextItem_0 = null;
    this._nextState_0 = -1;
    return result;
  };
  _no_name_provided__8.prototype.hasNext_10 = function () {
    if (this._nextState_0 === -1)
      calcNext_0(this);
    return this._nextState_0 === 1;
  };
  _no_name_provided__8.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator]
  };
  function DelimitedRangesSequence(input, startIndex, limit, getNextMatch) {
    this._input = input;
    this._startIndex = startIndex;
    this._limit = limit;
    this._getNextMatch = getNextMatch;
  }
  DelimitedRangesSequence.prototype.iterator_34 = function () {
    return new _no_name_provided__8(this);
  };
  DelimitedRangesSequence.$metadata$ = {
    simpleName: 'DelimitedRangesSequence',
    kind: 'class',
    interfaces: [Sequence]
  };
  function findAnyOf(_this_, strings, startIndex, ignoreCase, last) {
    if (!ignoreCase ? strings._get_size__18() === 1 : false) {
      var string = single(strings);
      var tmp;
      if (!last) {
        tmp = indexOf$default(_this_, string, startIndex, false, 4, null);
      } else {
        tmp = lastIndexOf$default(_this_, string, startIndex, false, 4, null);
      }
      var index = tmp;
      return index < 0 ? null : to(index, string);
    }var indices = !last ? numberRangeToNumber(coerceAtLeast(startIndex, 0), charSequenceLength(_this_)) : downTo(coerceAtMost(startIndex, _get_lastIndex__0(_this_)), 0);
    if (typeof _this_ === 'string') {
      var inductionVariable = indices._first_0;
      var last_0 = indices._last;
      var step = indices._step_0;
      if ((step > 0 ? inductionVariable <= last_0 : false) ? true : step < 0 ? last_0 <= inductionVariable : false)
        do {
          var index_0 = inductionVariable;
          inductionVariable = inductionVariable + step | 0;
          var tmp$ret$0;
          l$ret$1: do {
            var tmp0_iterator_1 = strings.iterator_34();
            while (tmp0_iterator_1.hasNext_10()) {
              var element_2 = tmp0_iterator_1.next_10();
              if (regionMatches(element_2, 0, _this_, index_0, element_2.length, ignoreCase)) {
                tmp$ret$0 = element_2;
                break l$ret$1;
              } else {
              }
            }
            tmp$ret$0 = null;
          }
           while (false);
          var matchingString = tmp$ret$0;
          if (!(matchingString == null))
            return to(index_0, matchingString);
        }
         while (!(index_0 === last_0));
    } else {
      {
        var inductionVariable_0 = indices._first_0;
        var last_1 = indices._last;
        var step_0 = indices._step_0;
        if ((step_0 > 0 ? inductionVariable_0 <= last_1 : false) ? true : step_0 < 0 ? last_1 <= inductionVariable_0 : false)
          do {
            var index_1 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + step_0 | 0;
            var tmp$ret$2;
            l$ret$3: do {
              var tmp0_iterator_1_0 = strings.iterator_34();
              while (tmp0_iterator_1_0.hasNext_10()) {
                var element_2_0 = tmp0_iterator_1_0.next_10();
                if (regionMatchesImpl(element_2_0, 0, _this_, index_1, element_2_0.length, ignoreCase)) {
                  tmp$ret$2 = element_2_0;
                  break l$ret$3;
                } else {
                }
              }
              tmp$ret$2 = null;
            }
             while (false);
            var matchingString_0 = tmp$ret$2;
            if (!(matchingString_0 == null))
              return to(index_1, matchingString_0);
          }
           while (!(index_1 === last_1));
      }
    }
    return null;
  }
  function indexOf_0(_this_, string, startIndex, ignoreCase) {
    var tmp;
    var tmp_0;
    if (ignoreCase) {
      tmp_0 = true;
    } else {
      tmp_0 = !(typeof _this_ === 'string');
    }
    if (tmp_0) {
      var tmp_1 = charSequenceLength(_this_);
      tmp = indexOf$default_0(_this_, string, startIndex, tmp_1, ignoreCase, false, 16, null);
    } else {
      {
        var tmp0_nativeIndexOf_0 = _this_;
        tmp = tmp0_nativeIndexOf_0.indexOf(string, startIndex);
      }
    }
    return tmp;
  }
  function indexOf$default(_this_, string, startIndex, ignoreCase, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = 0;
    if (!(($mask0 & 4) === 0))
      ignoreCase = false;
    return indexOf_0(_this_, string, startIndex, ignoreCase);
  }
  function lastIndexOf(_this_, string, startIndex, ignoreCase) {
    var tmp;
    var tmp_0;
    if (ignoreCase) {
      tmp_0 = true;
    } else {
      tmp_0 = !(typeof _this_ === 'string');
    }
    if (tmp_0) {
      tmp = indexOf_1(_this_, string, startIndex, 0, ignoreCase, true);
    } else {
      {
        var tmp0_nativeLastIndexOf_0 = _this_;
        tmp = tmp0_nativeLastIndexOf_0.lastIndexOf(string, startIndex);
      }
    }
    return tmp;
  }
  function lastIndexOf$default(_this_, string, startIndex, ignoreCase, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = _get_lastIndex__0(_this_);
    if (!(($mask0 & 4) === 0))
      ignoreCase = false;
    return lastIndexOf(_this_, string, startIndex, ignoreCase);
  }
  function regionMatchesImpl(_this_, thisOffset, other, otherOffset, length, ignoreCase) {
    if (((otherOffset < 0 ? true : thisOffset < 0) ? true : thisOffset > (charSequenceLength(_this_) - length | 0)) ? true : otherOffset > (charSequenceLength(other) - length | 0)) {
      return false;
    }var inductionVariable = 0;
    if (inductionVariable < length)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals(charSequenceGet(_this_, thisOffset + index | 0), charSequenceGet(other, otherOffset + index | 0), ignoreCase))
          return false;
      }
       while (inductionVariable < length);
    return true;
  }
  function indexOf_1(_this_, other, startIndex, endIndex, ignoreCase, last) {
    var indices = !last ? numberRangeToNumber(coerceAtLeast(startIndex, 0), coerceAtMost(endIndex, charSequenceLength(_this_))) : downTo(coerceAtMost(startIndex, _get_lastIndex__0(_this_)), coerceAtLeast(endIndex, 0));
    var tmp;
    if (typeof _this_ === 'string') {
      tmp = typeof other === 'string';
    } else {
      {
        tmp = false;
      }
    }
    if (tmp) {
      var inductionVariable = indices._first_0;
      var last_0 = indices._last;
      var step = indices._step_0;
      if ((step > 0 ? inductionVariable <= last_0 : false) ? true : step < 0 ? last_0 <= inductionVariable : false)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + step | 0;
          if (regionMatches(other, 0, _this_, index, charSequenceLength(other), ignoreCase))
            return index;
        }
         while (!(index === last_0));
    } else {
      {
        var inductionVariable_0 = indices._first_0;
        var last_1 = indices._last;
        var step_0 = indices._step_0;
        if ((step_0 > 0 ? inductionVariable_0 <= last_1 : false) ? true : step_0 < 0 ? last_1 <= inductionVariable_0 : false)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + step_0 | 0;
            if (regionMatchesImpl(other, 0, _this_, index_0, charSequenceLength(other), ignoreCase))
              return index_0;
          }
           while (!(index_0 === last_1));
      }
    }
    return -1;
  }
  function indexOf$default_0(_this_, other, startIndex, endIndex, ignoreCase, last, $mask0, $handler) {
    if (!(($mask0 & 16) === 0))
      last = false;
    return indexOf_1(_this_, other, startIndex, endIndex, ignoreCase, last);
  }
  function _no_name_provided__9($this_splitToSequence) {
    this._$this_splitToSequence = $this_splitToSequence;
  }
  _no_name_provided__9.prototype.invoke_12 = function (it) {
    return substring(this._$this_splitToSequence, it);
  };
  _no_name_provided__9.prototype.invoke_84 = function (p1) {
    return this.invoke_12(p1 instanceof IntRange ? p1 : THROW_CCE());
  };
  _no_name_provided__9.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__10($delimitersList, $ignoreCase) {
    this._$delimitersList = $delimitersList;
    this._$ignoreCase = $ignoreCase;
  }
  _no_name_provided__10.prototype.invoke_14 = function (_this__0, currentIndex) {
    var tmp0_safe_receiver = findAnyOf(_this__0, this._$delimitersList, currentIndex, this._$ignoreCase, false);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = to(tmp0_safe_receiver._first, tmp0_safe_receiver._second.length);
    }
    return tmp;
  };
  _no_name_provided__10.prototype.invoke_15 = function (p1, p2) {
    var tmp = (!(p1 == null) ? isCharSequence(p1) : false) ? p1 : THROW_CCE();
    return this.invoke_14(tmp, (!(p2 == null) ? typeof p2 === 'number' : false) ? p2 : THROW_CCE());
  };
  _no_name_provided__10.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_5($this_splitToSequence) {
    var i = new _no_name_provided__9($this_splitToSequence);
    return function (p1) {
      return i.invoke_12(p1);
    };
  }
  function _no_name_provided_$factory_6($delimitersList, $ignoreCase) {
    var i = new _no_name_provided__10($delimitersList, $ignoreCase);
    return function (p1, p2) {
      return i.invoke_14(p1, p2);
    };
  }
  function _Result___init__impl_(value) {
    return value;
  }
  function _Result___get_value__impl_(this_0) {
    return this_0;
  }
  function _Result___get_isFailure__impl_(this_0) {
    var tmp = _Result___get_value__impl_(this_0);
    return tmp instanceof Failure;
  }
  function Result__exceptionOrNull_impl(this_0) {
    var tmp0_subject = _Result___get_value__impl_(this_0);
    var tmp;
    if (tmp0_subject instanceof Failure) {
      tmp = _Result___get_value__impl_(this_0)._exception;
    } else {
      {
        tmp = null;
      }
    }
    return tmp;
  }
  function Companion_3() {
    Companion_instance_2 = this;
  }
  Companion_3.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_3();
    return Companion_instance_2;
  }
  function Failure(exception) {
    this._exception = exception;
  }
  Failure.prototype.equals = function (other) {
    var tmp;
    if (other instanceof Failure) {
      tmp = equals_0(this._exception, other._exception);
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  Failure.prototype.hashCode = function () {
    return hashCode(this._exception);
  };
  Failure.prototype.toString = function () {
    return '' + 'Failure(' + this._exception + ')';
  };
  Failure.$metadata$ = {
    simpleName: 'Failure',
    kind: 'class',
    interfaces: [Serializable]
  };
  function createFailure(exception) {
    return new Failure(exception);
  }
  function Pair(first, second) {
    this._first = first;
    this._second = second;
  }
  Pair.prototype.toString = function () {
    return '' + '(' + this._first + ', ' + this._second + ')';
  };
  Pair.prototype.component1 = function () {
    return this._first;
  };
  Pair.prototype.component2 = function () {
    return this._second;
  };
  Pair.prototype.hashCode = function () {
    var result = this._first == null ? 0 : hashCode(this._first);
    result = imul(result, 31) + (this._second == null ? 0 : hashCode(this._second)) | 0;
    return result;
  };
  Pair.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Pair))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Pair ? other : THROW_CCE();
    if (!equals_0(this._first, tmp0_other_with_cast._first))
      return false;
    if (!equals_0(this._second, tmp0_other_with_cast._second))
      return false;
    return true;
  };
  Pair.$metadata$ = {
    simpleName: 'Pair',
    kind: 'class',
    interfaces: [Serializable]
  };
  function to(_this_, that) {
    return new Pair(_this_, that);
  }
  function _UShort___init__impl_(data) {
    return data;
  }
  function _UShort___get_data__impl_(this_0) {
    return this_0;
  }
  function CharSequence() {
  }
  CharSequence.$metadata$ = {
    simpleName: 'CharSequence',
    kind: 'interface',
    interfaces: []
  };
  function Comparable() {
  }
  Comparable.$metadata$ = {
    simpleName: 'Comparable',
    kind: 'interface',
    interfaces: []
  };
  function Iterator() {
  }
  Iterator.$metadata$ = {
    simpleName: 'Iterator',
    kind: 'interface',
    interfaces: []
  };
  function ListIterator() {
  }
  ListIterator.$metadata$ = {
    simpleName: 'ListIterator',
    kind: 'interface',
    interfaces: [Iterator]
  };
  function MutableIterator() {
  }
  MutableIterator.$metadata$ = {
    simpleName: 'MutableIterator',
    kind: 'interface',
    interfaces: [Iterator]
  };
  function Number_0() {
  }
  Number_0.$metadata$ = {
    simpleName: 'Number',
    kind: 'class',
    interfaces: []
  };
  function IntIterator() {
  }
  IntIterator.prototype.next_10 = function () {
    return this.nextInt_0();
  };
  IntIterator.$metadata$ = {
    simpleName: 'IntIterator',
    kind: 'class',
    interfaces: [Iterator]
  };
  function IntProgressionIterator(first, last, step) {
    IntIterator.call(this);
    this._step = step;
    this._finalElement = last;
    this._hasNext = this._step > 0 ? first <= last : first >= last;
    this._next_0 = this._hasNext ? first : this._finalElement;
  }
  IntProgressionIterator.prototype.hasNext_10 = function () {
    return this._hasNext;
  };
  IntProgressionIterator.prototype.nextInt_0 = function () {
    var value = this._next_0;
    if (value === this._finalElement) {
      if (!this._hasNext)
        throw NoSuchElementException_init_$Create$();
      this._hasNext = false;
    } else {
      var tmp0_this = this;
      tmp0_this._next_0 = tmp0_this._next_0 + this._step | 0;
    }
    return value;
  };
  IntProgressionIterator.$metadata$ = {
    simpleName: 'IntProgressionIterator',
    kind: 'class',
    interfaces: []
  };
  function Companion_4() {
    Companion_instance_3 = this;
  }
  Companion_4.prototype.fromClosedRange = function (rangeStart, rangeEnd, step) {
    return new IntProgression(rangeStart, rangeEnd, step);
  };
  Companion_4.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_4();
    return Companion_instance_3;
  }
  function IntProgression(start, endInclusive, step) {
    Companion_getInstance_3();
    if (step === 0)
      throw IllegalArgumentException_init_$Create$('Step must be non-zero.');
    if (step === IntCompanionObject_getInstance()._MIN_VALUE)
      throw IllegalArgumentException_init_$Create$('Step must be greater than Int.MIN_VALUE to avoid overflow on negation.');
    this._first_0 = start;
    this._last = getProgressionLastElement(start, endInclusive, step);
    this._step_0 = step;
  }
  IntProgression.prototype._get_first__0 = function () {
    return this._first_0;
  };
  IntProgression.prototype._get_last__0 = function () {
    return this._last;
  };
  IntProgression.prototype.iterator_34 = function () {
    return new IntProgressionIterator(this._first_0, this._last, this._step_0);
  };
  IntProgression.prototype.isEmpty_16 = function () {
    return this._step_0 > 0 ? this._first_0 > this._last : this._first_0 < this._last;
  };
  IntProgression.prototype.equals = function (other) {
    var tmp;
    if (other instanceof IntProgression) {
      tmp = (this.isEmpty_16() ? other.isEmpty_16() : false) ? true : (this._first_0 === other._first_0 ? this._last === other._last : false) ? this._step_0 === other._step_0 : false;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  IntProgression.prototype.hashCode = function () {
    return this.isEmpty_16() ? -1 : imul(31, imul(31, this._first_0) + this._last | 0) + this._step_0 | 0;
  };
  IntProgression.prototype.toString = function () {
    return this._step_0 > 0 ? '' + this._first_0 + '..' + this._last + ' step ' + this._step_0 : '' + this._first_0 + ' downTo ' + this._last + ' step ' + (-this._step_0 | 0);
  };
  IntProgression.$metadata$ = {
    simpleName: 'IntProgression',
    kind: 'class',
    interfaces: [Iterable]
  };
  function ClosedRange() {
  }
  ClosedRange.$metadata$ = {
    simpleName: 'ClosedRange',
    kind: 'interface',
    interfaces: []
  };
  function Companion_5() {
    Companion_instance_4 = this;
    this._EMPTY = new IntRange(1, 0);
  }
  Companion_5.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_5();
    return Companion_instance_4;
  }
  function IntRange(start, endInclusive) {
    Companion_getInstance_4();
    IntProgression.call(this, start, endInclusive, 1);
  }
  IntRange.prototype._get_start_ = function () {
    return this._get_first__0();
  };
  IntRange.prototype._get_endInclusive_ = function () {
    return this._get_last__0();
  };
  IntRange.prototype.isEmpty_16 = function () {
    return this._get_first__0() > this._get_last__0();
  };
  IntRange.prototype.equals = function (other) {
    var tmp;
    if (other instanceof IntRange) {
      tmp = (this.isEmpty_16() ? other.isEmpty_16() : false) ? true : this._get_first__0() === other._get_first__0() ? this._get_last__0() === other._get_last__0() : false;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  IntRange.prototype.hashCode = function () {
    return this.isEmpty_16() ? -1 : imul(31, this._get_first__0()) + this._get_last__0() | 0;
  };
  IntRange.prototype.toString = function () {
    return '' + this._get_first__0() + '..' + this._get_last__0();
  };
  IntRange.$metadata$ = {
    simpleName: 'IntRange',
    kind: 'class',
    interfaces: [ClosedRange]
  };
  function Unit() {
    Unit_instance = this;
  }
  Unit.prototype.toString = function () {
    return 'kotlin.Unit';
  };
  Unit.$metadata$ = {
    simpleName: 'Unit',
    kind: 'object',
    interfaces: []
  };
  var Unit_instance;
  function Unit_getInstance() {
    if (Unit_instance == null)
      new Unit();
    return Unit_instance;
  }
  function getProgressionLastElement(start, end, step) {
    var tmp;
    if (step > 0) {
      tmp = start >= end ? end : end - differenceModulo(end, start, step) | 0;
    } else if (step < 0) {
      tmp = start <= end ? end : end + differenceModulo(start, end, -step | 0) | 0;
    } else {
      throw IllegalArgumentException_init_$Create$('Step is zero.');
    }
    return tmp;
  }
  function differenceModulo(a, b, c) {
    return mod(mod(a, c) - mod(b, c) | 0, c);
  }
  function mod(a, b) {
    var mod_0 = a % b;
    return mod_0 >= 0 ? mod_0 : mod_0 + b | 0;
  }
  function IntCompanionObject_0() {
    IntCompanionObject_instance = this;
    this._MIN_VALUE = -2147483648;
    this._MAX_VALUE = 2147483647;
    this._SIZE_BYTES = 4;
    this._SIZE_BITS = 32;
  }
  IntCompanionObject_0.prototype._get_MIN_VALUE_ = function () {
    return this._MIN_VALUE;
  };
  IntCompanionObject_0.prototype._get_MAX_VALUE_ = function () {
    return this._MAX_VALUE;
  };
  IntCompanionObject_0.prototype._get_SIZE_BYTES_ = function () {
    return this._SIZE_BYTES;
  };
  IntCompanionObject_0.prototype._get_SIZE_BITS_ = function () {
    return this._SIZE_BITS;
  };
  IntCompanionObject_0.$metadata$ = {
    simpleName: 'IntCompanionObject',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(IntCompanionObject_0.prototype, 'MIN_VALUE', {
    configurable: true,
    get: IntCompanionObject_0.prototype._get_MIN_VALUE_
  });
  Object.defineProperty(IntCompanionObject_0.prototype, 'MAX_VALUE', {
    configurable: true,
    get: IntCompanionObject_0.prototype._get_MAX_VALUE_
  });
  Object.defineProperty(IntCompanionObject_0.prototype, 'SIZE_BYTES', {
    configurable: true,
    get: IntCompanionObject_0.prototype._get_SIZE_BYTES_
  });
  Object.defineProperty(IntCompanionObject_0.prototype, 'SIZE_BITS', {
    configurable: true,
    get: IntCompanionObject_0.prototype._get_SIZE_BITS_
  });
  var IntCompanionObject_instance;
  function IntCompanionObject_getInstance() {
    if (IntCompanionObject_instance == null)
      new IntCompanionObject_0();
    return IntCompanionObject_instance;
  }
  function arrayCopy_0(source, destination, destinationOffset, startIndex, endIndex) {
    Companion_getInstance().checkRangeIndexes(startIndex, endIndex, source.length);
    var rangeSize = endIndex - startIndex | 0;
    Companion_getInstance().checkRangeIndexes(destinationOffset, destinationOffset + rangeSize | 0, destination.length);
    if (ArrayBuffer.isView(destination) && ArrayBuffer.isView(source)) {
      var subrange = source.subarray(startIndex, endIndex);
      destination.set(subrange, destinationOffset);
    } else {
      if (!(source === destination) ? true : destinationOffset <= startIndex) {
        var inductionVariable = 0;
        if (inductionVariable < rangeSize)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            destination[destinationOffset + index | 0] = source[startIndex + index | 0];
          }
           while (inductionVariable < rangeSize);
      } else {
        var inductionVariable_0 = rangeSize - 1 | 0;
        if (0 <= inductionVariable_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + -1 | 0;
            destination[destinationOffset + index_0 | 0] = source[startIndex + index_0 | 0];
          }
           while (0 <= inductionVariable_0);
      }
    }
  }
  function listOf(element) {
    return arrayListOf([element]);
  }
  function copyToArray_0(collection) {
    var tmp;
    if (collection.toArray !== undefined) {
      var tmp0_unsafeCast_0 = collection.toArray();
      tmp = tmp0_unsafeCast_0;
    } else {
      {
        var tmp1_unsafeCast_0 = copyToArrayImpl_0(collection);
        tmp = tmp1_unsafeCast_0;
      }
    }
    return tmp;
  }
  function copyToArrayImpl_0(collection) {
    var array = [];
    var iterator = collection.iterator_34();
    while (iterator.hasNext_10()) {
      array.push(iterator.next_10());
    }
    return array;
  }
  function checkIndexOverflow(index) {
    if (index < 0) {
      throwIndexOverflow();
    }return index;
  }
  function AbstractMutableCollection() {
    AbstractCollection.call(this);
  }
  AbstractMutableCollection.prototype.addAll_8 = function (elements) {
    this.checkIsMutable_8();
    var modified = false;
    var tmp0_iterator = elements.iterator_34();
    while (tmp0_iterator.hasNext_10()) {
      var element = tmp0_iterator.next_10();
      if (this.add_13(element))
        modified = true;
    }
    return modified;
  };
  AbstractMutableCollection.prototype.toJSON = function () {
    return this.toArray();
  };
  AbstractMutableCollection.prototype.checkIsMutable_8 = function () {
  };
  AbstractMutableCollection.$metadata$ = {
    simpleName: 'AbstractMutableCollection',
    kind: 'class',
    interfaces: [MutableCollection]
  };
  function IteratorImpl($outer) {
    this._$this = $outer;
    this._index = 0;
    this._last_0 = -1;
  }
  IteratorImpl.prototype.hasNext_10 = function () {
    return this._index < this._$this._get_size__18();
  };
  IteratorImpl.prototype.next_10 = function () {
    if (!this.hasNext_10())
      throw NoSuchElementException_init_$Create$();
    var tmp = this;
    var tmp0_this = this;
    var tmp1 = tmp0_this._index;
    tmp0_this._index = tmp1 + 1 | 0;
    tmp._last_0 = tmp1;
    return this._$this.get_42(this._last_0);
  };
  IteratorImpl.$metadata$ = {
    simpleName: 'IteratorImpl',
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function AbstractMutableList() {
    AbstractMutableCollection.call(this);
    this._modCount = 0;
  }
  AbstractMutableList.prototype._set_modCount__0 = function (_set___) {
    this._modCount = _set___;
  };
  AbstractMutableList.prototype._get_modCount__0 = function () {
    return this._modCount;
  };
  AbstractMutableList.prototype.add_13 = function (element) {
    this.checkIsMutable_8();
    this.add_8(this._get_size__18(), element);
    return true;
  };
  AbstractMutableList.prototype.iterator_34 = function () {
    return new IteratorImpl(this);
  };
  AbstractMutableList.prototype.contains_10 = function (element) {
    return this.indexOf_0(element) >= 0;
  };
  AbstractMutableList.prototype.indexOf_0 = function (element) {
    var inductionVariable = 0;
    var last = _get_lastIndex_(this);
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals_0(this.get_42(index), element)) {
          return index;
        }}
       while (!(index === last));
    return -1;
  };
  AbstractMutableList.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, List) : false))
      return false;
    else {
    }
    return Companion_getInstance().orderedEquals(this, other);
  };
  AbstractMutableList.prototype.hashCode = function () {
    return Companion_getInstance().orderedHashCode(this);
  };
  AbstractMutableList.$metadata$ = {
    simpleName: 'AbstractMutableList',
    kind: 'class',
    interfaces: [MutableList]
  };
  function _no_name_provided__11($entryIterator) {
    this._$entryIterator = $entryIterator;
  }
  _no_name_provided__11.prototype.hasNext_10 = function () {
    return this._$entryIterator.hasNext_10();
  };
  _no_name_provided__11.prototype.next_10 = function () {
    return this._$entryIterator.next_10()._get_key__18();
  };
  _no_name_provided__11.$metadata$ = {
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function SimpleEntry(key, value) {
    this._key_0 = key;
    this.__value = value;
  }
  SimpleEntry.prototype._get_key__18 = function () {
    return this._key_0;
  };
  SimpleEntry.prototype._get_value__4 = function () {
    return this.__value;
  };
  SimpleEntry.prototype.setValue_0 = function (newValue) {
    var oldValue = this.__value;
    this.__value = newValue;
    return oldValue;
  };
  SimpleEntry.prototype.hashCode = function () {
    return Companion_getInstance_0().entryHashCode(this);
  };
  SimpleEntry.prototype.toString = function () {
    return Companion_getInstance_0().entryToString(this);
  };
  SimpleEntry.prototype.equals = function (other) {
    return Companion_getInstance_0().entryEquals(this, other);
  };
  SimpleEntry.$metadata$ = {
    simpleName: 'SimpleEntry',
    kind: 'class',
    interfaces: [MutableEntry]
  };
  function AbstractEntrySet() {
    AbstractMutableSet.call(this);
  }
  AbstractEntrySet.prototype.contains_10 = function (element) {
    return this.containsEntry_2(element);
  };
  AbstractEntrySet.$metadata$ = {
    simpleName: 'AbstractEntrySet',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__12(this$0) {
    this._this$0_4 = this$0;
    AbstractMutableSet.call(this);
  }
  _no_name_provided__12.prototype.add_4 = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on keys');
  };
  _no_name_provided__12.prototype.add_13 = function (element) {
    return this.add_4((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  _no_name_provided__12.prototype.contains_12 = function (element) {
    return this._this$0_4.containsKey_2(element);
  };
  _no_name_provided__12.prototype.contains_10 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    else {
    }
    return this.contains_12((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  _no_name_provided__12.prototype.iterator_34 = function () {
    var entryIterator = this._this$0_4._get_entries__2().iterator_34();
    return new _no_name_provided__11(entryIterator);
  };
  _no_name_provided__12.prototype._get_size__18 = function () {
    return this._this$0_4._get_size__18();
  };
  _no_name_provided__12.prototype.checkIsMutable_8 = function () {
    return this._this$0_4.checkIsMutable_8();
  };
  _no_name_provided__12.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function AbstractMutableMap() {
    AbstractMap.call(this);
    this.__keys_0 = null;
    this.__values_0 = null;
  }
  AbstractMutableMap.prototype._get_keys__0 = function () {
    if (this.__keys_0 == null) {
      var tmp = this;
      tmp.__keys_0 = new _no_name_provided__12(this);
    }return ensureNotNull(this.__keys_0);
  };
  AbstractMutableMap.prototype.checkIsMutable_8 = function () {
  };
  AbstractMutableMap.$metadata$ = {
    simpleName: 'AbstractMutableMap',
    kind: 'class',
    interfaces: [MutableMap]
  };
  function AbstractMutableSet() {
    AbstractMutableCollection.call(this);
  }
  AbstractMutableSet.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, Set) : false))
      return false;
    else {
    }
    return Companion_getInstance_1().setEquals(this, other);
  };
  AbstractMutableSet.prototype.hashCode = function () {
    return Companion_getInstance_1().unorderedHashCode(this);
  };
  AbstractMutableSet.$metadata$ = {
    simpleName: 'AbstractMutableSet',
    kind: 'class',
    interfaces: [MutableSet]
  };
  function ArrayList_init_$Init$($this) {
    ArrayList.call($this, []);
    return $this;
  }
  function ArrayList_init_$Create$() {
    return ArrayList_init_$Init$(Object.create(ArrayList.prototype));
  }
  function ArrayList_init_$Init$_0(initialCapacity, $this) {
    ArrayList.call($this, []);
    return $this;
  }
  function ArrayList_init_$Create$_0(initialCapacity) {
    return ArrayList_init_$Init$_0(initialCapacity, Object.create(ArrayList.prototype));
  }
  function ArrayList_init_$Init$_1(elements, $this) {
    ArrayList.call($this, copyToArray_0(elements));
    return $this;
  }
  function ArrayList_init_$Create$_1(elements) {
    return ArrayList_init_$Init$_1(elements, Object.create(ArrayList.prototype));
  }
  function rangeCheck($this, index) {
    Companion_getInstance().checkElementIndex(index, $this._get_size__18());
    return index;
  }
  function insertionRangeCheck($this, index) {
    Companion_getInstance().checkPositionIndex(index, $this._get_size__18());
    return index;
  }
  function ArrayList(array) {
    AbstractMutableList.call(this);
    this._array = array;
    this._isReadOnly = false;
  }
  ArrayList.prototype._get_size__18 = function () {
    return this._array.length;
  };
  ArrayList.prototype.get_42 = function (index) {
    var tmp = this._array[rangeCheck(this, index)];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  ArrayList.prototype.add_13 = function (element) {
    this.checkIsMutable_8();
    var tmp0_asDynamic_0 = this._array;
    tmp0_asDynamic_0.push(element);
    var tmp0_this = this;
    var tmp1 = tmp0_this._get_modCount__0();
    tmp0_this._set_modCount__0(tmp1 + 1 | 0);
    Unit_getInstance();
    return true;
  };
  ArrayList.prototype.add_8 = function (index, element) {
    this.checkIsMutable_8();
    var tmp0_asDynamic_0 = this._array;
    tmp0_asDynamic_0.splice(insertionRangeCheck(this, index), 0, element);
    var tmp0_this = this;
    var tmp1 = tmp0_this._get_modCount__0();
    tmp0_this._set_modCount__0(tmp1 + 1 | 0);
    Unit_getInstance();
  };
  ArrayList.prototype.addAll_8 = function (elements) {
    this.checkIsMutable_8();
    if (elements.isEmpty_16())
      return false;
    var tmp0_this = this;
    var tmp = tmp0_this;
    var tmp0_plus_0 = tmp0_this._array;
    var tmp1_plus_0 = copyToArray_0(elements);
    tmp._array = tmp0_plus_0.concat(tmp1_plus_0);
    var tmp1_this = this;
    var tmp2 = tmp1_this._get_modCount__0();
    tmp1_this._set_modCount__0(tmp2 + 1 | 0);
    Unit_getInstance();
    return true;
  };
  ArrayList.prototype.indexOf_0 = function (element) {
    return indexOf(this._array, element);
  };
  ArrayList.prototype.toString = function () {
    return arrayToString(this._array);
  };
  ArrayList.prototype.toArray_0 = function () {
    return [].slice.call(this._array);
  };
  ArrayList.prototype.toArray = function () {
    return this.toArray_0();
  };
  ArrayList.prototype.checkIsMutable_8 = function () {
    if (this._isReadOnly)
      throw UnsupportedOperationException_init_$Create$();
  };
  ArrayList.$metadata$ = {
    simpleName: 'ArrayList',
    kind: 'class',
    interfaces: [MutableList, RandomAccess]
  };
  function HashCode() {
    HashCode_instance = this;
  }
  HashCode.prototype.equals_1 = function (value1, value2) {
    return equals_0(value1, value2);
  };
  HashCode.prototype.getHashCode_0 = function (value) {
    var tmp0_safe_receiver = value;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  HashCode.$metadata$ = {
    simpleName: 'HashCode',
    kind: 'object',
    interfaces: [EqualityComparator]
  };
  var HashCode_instance;
  function HashCode_getInstance() {
    if (HashCode_instance == null)
      new HashCode();
    return HashCode_instance;
  }
  function EqualityComparator() {
  }
  EqualityComparator.$metadata$ = {
    simpleName: 'EqualityComparator',
    kind: 'interface',
    interfaces: []
  };
  function EntrySet($outer) {
    this._$this_0 = $outer;
    AbstractEntrySet.call(this);
  }
  EntrySet.prototype.add_9 = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on entries');
  };
  EntrySet.prototype.add_13 = function (element) {
    return this.add_9((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  EntrySet.prototype.containsEntry_2 = function (element) {
    return this._$this_0.containsEntry_3(element);
  };
  EntrySet.prototype.iterator_34 = function () {
    return this._$this_0._internalMap.iterator_34();
  };
  EntrySet.prototype._get_size__18 = function () {
    return this._$this_0._get_size__18();
  };
  EntrySet.$metadata$ = {
    simpleName: 'EntrySet',
    kind: 'class',
    interfaces: []
  };
  function HashMap_init_$Init$(internalMap, $this) {
    AbstractMutableMap.call($this);
    HashMap.call($this);
    $this._internalMap = internalMap;
    $this._equality = internalMap._get_equality__0();
    return $this;
  }
  function HashMap_init_$Init$_0($this) {
    HashMap_init_$Init$(new InternalHashCodeMap(HashCode_getInstance()), $this);
    return $this;
  }
  function HashMap_init_$Init$_1(initialCapacity, loadFactor, $this) {
    HashMap_init_$Init$_0($this);
    var tmp0_require_0 = initialCapacity >= 0;
    if (!tmp0_require_0) {
      var message_1 = '' + 'Negative initial capacity: ' + initialCapacity;
      throw IllegalArgumentException_init_$Create$(toString_1(message_1));
    }var tmp1_require_0 = loadFactor >= 0;
    if (!tmp1_require_0) {
      var message_1_0 = '' + 'Non-positive load factor: ' + loadFactor;
      throw IllegalArgumentException_init_$Create$(toString_1(message_1_0));
    }return $this;
  }
  function HashMap_init_$Create$(initialCapacity, loadFactor) {
    return HashMap_init_$Init$_1(initialCapacity, loadFactor, Object.create(HashMap.prototype));
  }
  HashMap.prototype.containsKey_2 = function (key) {
    return this._internalMap.contains_12(key);
  };
  HashMap.prototype._get_entries__2 = function () {
    if (this.__entries == null) {
      this.__entries = this.createEntrySet();
    }return ensureNotNull(this.__entries);
  };
  HashMap.prototype.createEntrySet = function () {
    return new EntrySet(this);
  };
  HashMap.prototype.get_17 = function (key) {
    return this._internalMap.get_17(key);
  };
  HashMap.prototype.put_2 = function (key, value) {
    return this._internalMap.put_2(key, value);
  };
  HashMap.prototype._get_size__18 = function () {
    return this._internalMap._get_size__18();
  };
  function HashMap() {
    this.__entries = null;
  }
  HashMap.$metadata$ = {
    simpleName: 'HashMap',
    kind: 'class',
    interfaces: [MutableMap]
  };
  function HashSet_init_$Init$(initialCapacity, loadFactor, $this) {
    AbstractMutableSet.call($this);
    HashSet.call($this);
    $this._map = HashMap_init_$Create$(initialCapacity, loadFactor);
    return $this;
  }
  function HashSet_init_$Init$_0(initialCapacity, $this) {
    HashSet_init_$Init$(initialCapacity, 0.0, $this);
    return $this;
  }
  function HashSet_init_$Create$(initialCapacity) {
    return HashSet_init_$Init$_0(initialCapacity, Object.create(HashSet.prototype));
  }
  HashSet.prototype.add_13 = function (element) {
    var old = this._map.put_2(element, this);
    return old == null;
  };
  HashSet.prototype.contains_10 = function (element) {
    return this._map.containsKey_2(element);
  };
  HashSet.prototype.isEmpty_16 = function () {
    return this._map.isEmpty_16();
  };
  HashSet.prototype.iterator_34 = function () {
    return this._map._get_keys__0().iterator_34();
  };
  HashSet.prototype._get_size__18 = function () {
    return this._map._get_size__18();
  };
  function HashSet() {
  }
  HashSet.$metadata$ = {
    simpleName: 'HashSet',
    kind: 'class',
    interfaces: [MutableSet]
  };
  function computeNext($this) {
    if ($this._chainOrEntry != null ? $this._isChain : false) {
      var tmp0_unsafeCast_0 = $this._chainOrEntry;
      var chainSize = tmp0_unsafeCast_0.length;
      var tmp0_this = $this;
      tmp0_this._itemIndex = tmp0_this._itemIndex + 1 | 0;
      if (tmp0_this._itemIndex < chainSize)
        return 0;
      else {
      }
    }var tmp1_this = $this;
    tmp1_this._keyIndex = tmp1_this._keyIndex + 1 | 0;
    if (tmp1_this._keyIndex < $this._keys.length) {
      $this._chainOrEntry = $this._this$0_5._backingMap[$this._keys[$this._keyIndex]];
      var tmp = $this;
      var tmp_0 = $this._chainOrEntry;
      tmp._isChain = !(tmp_0 == null) ? isArray(tmp_0) : false;
      $this._itemIndex = 0;
      return 0;
    } else {
      {
        $this._chainOrEntry = null;
        return 1;
      }
    }
  }
  function getEntry($this, key) {
    var tmp0_elvis_lhs = getChainOrEntryOrNull($this, $this._equality_0.getHashCode_0(key));
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var chainOrEntry = tmp;
    if (!(!(chainOrEntry == null) ? isArray(chainOrEntry) : false)) {
      var entry = chainOrEntry;
      if ($this._equality_0.equals_1(entry._get_key__18(), key)) {
        return entry;
      } else {
        return null;
      }
    } else {
      {
        var chain = chainOrEntry;
        return findEntryInChain(chain, $this, key);
      }
    }
  }
  function findEntryInChain(_this_, $this, key) {
    var tmp$ret$0;
    l$ret$1: do {
      var indexedObject = _this_;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element_2 = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if ($this._equality_0.equals_1(element_2._get_key__18(), key)) {
          tmp$ret$0 = element_2;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = null;
    }
     while (false);
    return tmp$ret$0;
  }
  function getChainOrEntryOrNull($this, hashCode_1) {
    var chainOrEntry = $this._backingMap[hashCode_1];
    return chainOrEntry === undefined ? null : chainOrEntry;
  }
  function _no_name_provided__13(this$0) {
    this._this$0_5 = this$0;
    this._state = -1;
    this._keys = Object.keys(this._this$0_5._backingMap);
    this._keyIndex = -1;
    this._chainOrEntry = null;
    this._isChain = false;
    this._itemIndex = -1;
    this._lastEntry = null;
  }
  _no_name_provided__13.prototype.hasNext_10 = function () {
    if (this._state === -1)
      this._state = computeNext(this);
    return this._state === 0;
  };
  _no_name_provided__13.prototype.next_10 = function () {
    if (!this.hasNext_10())
      throw NoSuchElementException_init_$Create$();
    var tmp;
    if (this._isChain) {
      var tmp0_unsafeCast_0 = this._chainOrEntry;
      tmp = tmp0_unsafeCast_0[this._itemIndex];
    } else {
      var tmp1_unsafeCast_0 = this._chainOrEntry;
      tmp = tmp1_unsafeCast_0;
    }
    var lastEntry = tmp;
    this._lastEntry = lastEntry;
    this._state = -1;
    return lastEntry;
  };
  _no_name_provided__13.$metadata$ = {
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function InternalHashCodeMap(equality) {
    this._equality_0 = equality;
    this._backingMap = this.createJsMap_0();
    this._size = 0;
  }
  InternalHashCodeMap.prototype._get_equality__0 = function () {
    return this._equality_0;
  };
  InternalHashCodeMap.prototype._get_size__18 = function () {
    return this._size;
  };
  InternalHashCodeMap.prototype.put_2 = function (key, value) {
    var hashCode_1 = this._equality_0.getHashCode_0(key);
    var chainOrEntry = getChainOrEntryOrNull(this, hashCode_1);
    if (chainOrEntry == null) {
      this._backingMap[hashCode_1] = new SimpleEntry(key, value);
    } else {
      if (!(!(chainOrEntry == null) ? isArray(chainOrEntry) : false)) {
        var entry = chainOrEntry;
        if (this._equality_0.equals_1(entry._get_key__18(), key)) {
          return entry.setValue_0(value);
        } else {
          var tmp0_arrayOf_0 = [entry, new SimpleEntry(key, value)];
          this._backingMap[hashCode_1] = tmp0_arrayOf_0;
          var tmp0_this = this;
          var tmp1 = tmp0_this._size;
          tmp0_this._size = tmp1 + 1 | 0;
          Unit_getInstance();
          return null;
        }
      } else {
        {
          var chain = chainOrEntry;
          var entry_0 = findEntryInChain(chain, this, key);
          if (!(entry_0 == null)) {
            return entry_0.setValue_0(value);
          }chain.push(new SimpleEntry(key, value));
        }
      }
    }
    var tmp2_this = this;
    var tmp3 = tmp2_this._size;
    tmp2_this._size = tmp3 + 1 | 0;
    Unit_getInstance();
    return null;
  };
  InternalHashCodeMap.prototype.contains_12 = function (key) {
    return !(getEntry(this, key) == null);
  };
  InternalHashCodeMap.prototype.get_17 = function (key) {
    var tmp0_safe_receiver = getEntry(this, key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_value__4();
  };
  InternalHashCodeMap.prototype.iterator_34 = function () {
    return new _no_name_provided__13(this);
  };
  InternalHashCodeMap.$metadata$ = {
    simpleName: 'InternalHashCodeMap',
    kind: 'class',
    interfaces: [InternalMap]
  };
  function InternalMap() {
  }
  InternalMap.prototype.createJsMap_0 = function () {
    var result = Object.create(null);
    result['foo'] = 1;
    jsDeleteProperty(result, 'foo');
    return result;
  };
  InternalMap.$metadata$ = {
    simpleName: 'InternalMap',
    kind: 'interface',
    interfaces: [MutableIterable]
  };
  function RandomAccess() {
  }
  RandomAccess.$metadata$ = {
    simpleName: 'RandomAccess',
    kind: 'interface',
    interfaces: []
  };
  function Serializable() {
  }
  Serializable.$metadata$ = {
    simpleName: 'Serializable',
    kind: 'interface',
    interfaces: []
  };
  function json(pairs) {
    var res = {};
    var indexedObject = pairs;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var tmp1_loop_parameter = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var name = tmp1_loop_parameter.component1();
      var value = tmp1_loop_parameter.component2();
      res[name] = value;
    }
    return res;
  }
  function isNaN_0(_this_) {
    return !(_this_ === _this_);
  }
  function _get_js_(_this_) {
    return (_this_ instanceof KClassImpl ? _this_ : THROW_CCE())._get_jClass__2();
  }
  function KClass() {
  }
  KClass.$metadata$ = {
    simpleName: 'KClass',
    kind: 'interface',
    interfaces: [KClassifier]
  };
  function KClassImpl(jClass) {
    this._jClass = jClass;
  }
  KClassImpl.prototype._get_jClass__2 = function () {
    return this._jClass;
  };
  KClassImpl.prototype.equals = function (other) {
    var tmp;
    if (other instanceof KClassImpl) {
      tmp = equals_0(this._get_jClass__2(), other._get_jClass__2());
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  KClassImpl.prototype.hashCode = function () {
    var tmp0_safe_receiver = this._get_simpleName__4();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  KClassImpl.prototype.toString = function () {
    return '' + 'class ' + this._get_simpleName__4();
  };
  KClassImpl.$metadata$ = {
    simpleName: 'KClassImpl',
    kind: 'class',
    interfaces: [KClass]
  };
  function PrimitiveKClassImpl(jClass, givenSimpleName, isInstanceFunction) {
    KClassImpl.call(this, jClass);
    this._givenSimpleName = givenSimpleName;
    this._isInstanceFunction = isInstanceFunction;
  }
  PrimitiveKClassImpl.prototype.equals = function (other) {
    if (!(other instanceof PrimitiveKClassImpl))
      return false;
    else {
    }
    return KClassImpl.prototype.equals.call(this, other) ? this._givenSimpleName === other._givenSimpleName : false;
  };
  PrimitiveKClassImpl.prototype._get_simpleName__4 = function () {
    return this._givenSimpleName;
  };
  PrimitiveKClassImpl.$metadata$ = {
    simpleName: 'PrimitiveKClassImpl',
    kind: 'class',
    interfaces: []
  };
  function NothingKClassImpl() {
    NothingKClassImpl_instance = this;
    KClassImpl.call(this, Object);
    this._simpleName = 'Nothing';
  }
  NothingKClassImpl.prototype._get_simpleName__4 = function () {
    return this._simpleName;
  };
  NothingKClassImpl.prototype._get_jClass__2 = function () {
    throw UnsupportedOperationException_init_$Create$_0("There's no native JS class for Nothing type");
  };
  NothingKClassImpl.prototype.equals = function (other) {
    return other === this;
  };
  NothingKClassImpl.prototype.hashCode = function () {
    return 0;
  };
  NothingKClassImpl.$metadata$ = {
    simpleName: 'NothingKClassImpl',
    kind: 'object',
    interfaces: []
  };
  var NothingKClassImpl_instance;
  function NothingKClassImpl_getInstance() {
    if (NothingKClassImpl_instance == null)
      new NothingKClassImpl();
    return NothingKClassImpl_instance;
  }
  function ErrorKClass() {
  }
  ErrorKClass.prototype._get_simpleName__4 = function () {
    var tmp0_error_0 = 'Unknown simpleName for ErrorKClass';
    throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
  };
  ErrorKClass.prototype.equals = function (other) {
    return other === this;
  };
  ErrorKClass.prototype.hashCode = function () {
    return 0;
  };
  ErrorKClass.$metadata$ = {
    simpleName: 'ErrorKClass',
    kind: 'class',
    interfaces: [KClass]
  };
  function SimpleKClassImpl(jClass) {
    KClassImpl.call(this, jClass);
    var tmp = this;
    var tmp0_safe_receiver = jClass.$metadata$;
    var tmp0_unsafeCast_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.simpleName;
    tmp._simpleName_0 = tmp0_unsafeCast_0;
  }
  SimpleKClassImpl.prototype._get_simpleName__4 = function () {
    return this._simpleName_0;
  };
  SimpleKClassImpl.$metadata$ = {
    simpleName: 'SimpleKClassImpl',
    kind: 'class',
    interfaces: []
  };
  var functionClasses;
  function _no_name_provided__14() {
  }
  _no_name_provided__14.prototype.invoke_56 = function (it) {
    return isObject(it);
  };
  _no_name_provided__14.prototype.invoke_84 = function (p1) {
    return this.invoke_56((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__14.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__15() {
  }
  _no_name_provided__15.prototype.invoke_56 = function (it) {
    return isNumber(it);
  };
  _no_name_provided__15.prototype.invoke_84 = function (p1) {
    return this.invoke_56((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__15.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__16() {
  }
  _no_name_provided__16.prototype.invoke_56 = function (it) {
    return !(it == null) ? typeof it === 'boolean' : false;
  };
  _no_name_provided__16.prototype.invoke_84 = function (p1) {
    return this.invoke_56((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__16.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__17() {
  }
  _no_name_provided__17.prototype.invoke_56 = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__17.prototype.invoke_84 = function (p1) {
    return this.invoke_56((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__17.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__18() {
  }
  _no_name_provided__18.prototype.invoke_56 = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__18.prototype.invoke_84 = function (p1) {
    return this.invoke_56((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__18.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__19() {
  }
  _no_name_provided__19.prototype.invoke_56 = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__19.prototype.invoke_84 = function (p1) {
    return this.invoke_56((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__19.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__20() {
  }
  _no_name_provided__20.prototype.invoke_56 = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__20.prototype.invoke_84 = function (p1) {
    return this.invoke_56((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__20.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__21() {
  }
  _no_name_provided__21.prototype.invoke_56 = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__21.prototype.invoke_84 = function (p1) {
    return this.invoke_56((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__21.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__22() {
  }
  _no_name_provided__22.prototype.invoke_56 = function (it) {
    return !(it == null) ? isArray(it) : false;
  };
  _no_name_provided__22.prototype.invoke_84 = function (p1) {
    return this.invoke_56((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__22.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__23() {
  }
  _no_name_provided__23.prototype.invoke_56 = function (it) {
    return !(it == null) ? typeof it === 'string' : false;
  };
  _no_name_provided__23.prototype.invoke_84 = function (p1) {
    return this.invoke_56((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__23.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__24() {
  }
  _no_name_provided__24.prototype.invoke_56 = function (it) {
    return it instanceof Error;
  };
  _no_name_provided__24.prototype.invoke_84 = function (p1) {
    return this.invoke_56((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__24.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__25() {
  }
  _no_name_provided__25.prototype.invoke_56 = function (it) {
    return !(it == null) ? isBooleanArray(it) : false;
  };
  _no_name_provided__25.prototype.invoke_84 = function (p1) {
    return this.invoke_56((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__25.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__26() {
  }
  _no_name_provided__26.prototype.invoke_56 = function (it) {
    return !(it == null) ? isCharArray(it) : false;
  };
  _no_name_provided__26.prototype.invoke_84 = function (p1) {
    return this.invoke_56((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__26.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__27() {
  }
  _no_name_provided__27.prototype.invoke_56 = function (it) {
    return !(it == null) ? isByteArray(it) : false;
  };
  _no_name_provided__27.prototype.invoke_84 = function (p1) {
    return this.invoke_56((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__27.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__28() {
  }
  _no_name_provided__28.prototype.invoke_56 = function (it) {
    return !(it == null) ? isShortArray(it) : false;
  };
  _no_name_provided__28.prototype.invoke_84 = function (p1) {
    return this.invoke_56((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__28.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__29() {
  }
  _no_name_provided__29.prototype.invoke_56 = function (it) {
    return !(it == null) ? isIntArray(it) : false;
  };
  _no_name_provided__29.prototype.invoke_84 = function (p1) {
    return this.invoke_56((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__29.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__30() {
  }
  _no_name_provided__30.prototype.invoke_56 = function (it) {
    return !(it == null) ? isLongArray(it) : false;
  };
  _no_name_provided__30.prototype.invoke_84 = function (p1) {
    return this.invoke_56((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__30.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__31() {
  }
  _no_name_provided__31.prototype.invoke_56 = function (it) {
    return !(it == null) ? isFloatArray(it) : false;
  };
  _no_name_provided__31.prototype.invoke_84 = function (p1) {
    return this.invoke_56((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__31.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__32() {
  }
  _no_name_provided__32.prototype.invoke_56 = function (it) {
    return !(it == null) ? isDoubleArray(it) : false;
  };
  _no_name_provided__32.prototype.invoke_84 = function (p1) {
    return this.invoke_56((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__32.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__33($arity) {
    this._$arity = $arity;
  }
  _no_name_provided__33.prototype.invoke_56 = function (it) {
    var tmp;
    if (typeof it === 'function') {
      tmp = it.length === this._$arity;
    } else {
      tmp = false;
    }
    return tmp;
  };
  _no_name_provided__33.prototype.invoke_84 = function (p1) {
    return this.invoke_56((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__33.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function PrimitiveClasses_0() {
    PrimitiveClasses_instance = this;
    var tmp = this;
    var tmp0_unsafeCast_0 = Object;
    var tmp_0 = tmp0_unsafeCast_0;
    tmp._anyClass = new PrimitiveKClassImpl(tmp_0, 'Any', _no_name_provided_$factory_7());
    var tmp_1 = this;
    var tmp0_unsafeCast_0_0 = Number;
    var tmp_2 = tmp0_unsafeCast_0_0;
    tmp_1._numberClass = new PrimitiveKClassImpl(tmp_2, 'Number', _no_name_provided_$factory_8());
    this._nothingClass = NothingKClassImpl_getInstance();
    var tmp_3 = this;
    var tmp0_unsafeCast_0_1 = Boolean;
    var tmp_4 = tmp0_unsafeCast_0_1;
    tmp_3._booleanClass = new PrimitiveKClassImpl(tmp_4, 'Boolean', _no_name_provided_$factory_9());
    var tmp_5 = this;
    var tmp0_unsafeCast_0_2 = Number;
    var tmp_6 = tmp0_unsafeCast_0_2;
    tmp_5._byteClass = new PrimitiveKClassImpl(tmp_6, 'Byte', _no_name_provided_$factory_10());
    var tmp_7 = this;
    var tmp0_unsafeCast_0_3 = Number;
    var tmp_8 = tmp0_unsafeCast_0_3;
    tmp_7._shortClass = new PrimitiveKClassImpl(tmp_8, 'Short', _no_name_provided_$factory_11());
    var tmp_9 = this;
    var tmp0_unsafeCast_0_4 = Number;
    var tmp_10 = tmp0_unsafeCast_0_4;
    tmp_9._intClass = new PrimitiveKClassImpl(tmp_10, 'Int', _no_name_provided_$factory_12());
    var tmp_11 = this;
    var tmp0_unsafeCast_0_5 = Number;
    var tmp_12 = tmp0_unsafeCast_0_5;
    tmp_11._floatClass = new PrimitiveKClassImpl(tmp_12, 'Float', _no_name_provided_$factory_13());
    var tmp_13 = this;
    var tmp0_unsafeCast_0_6 = Number;
    var tmp_14 = tmp0_unsafeCast_0_6;
    tmp_13._doubleClass = new PrimitiveKClassImpl(tmp_14, 'Double', _no_name_provided_$factory_14());
    var tmp_15 = this;
    var tmp0_unsafeCast_0_7 = Array;
    var tmp_16 = tmp0_unsafeCast_0_7;
    tmp_15._arrayClass = new PrimitiveKClassImpl(tmp_16, 'Array', _no_name_provided_$factory_15());
    var tmp_17 = this;
    var tmp0_unsafeCast_0_8 = String;
    var tmp_18 = tmp0_unsafeCast_0_8;
    tmp_17._stringClass = new PrimitiveKClassImpl(tmp_18, 'String', _no_name_provided_$factory_16());
    var tmp_19 = this;
    var tmp0_unsafeCast_0_9 = Error;
    var tmp_20 = tmp0_unsafeCast_0_9;
    tmp_19._throwableClass = new PrimitiveKClassImpl(tmp_20, 'Throwable', _no_name_provided_$factory_17());
    var tmp_21 = this;
    var tmp0_unsafeCast_0_10 = Array;
    var tmp_22 = tmp0_unsafeCast_0_10;
    tmp_21._booleanArrayClass = new PrimitiveKClassImpl(tmp_22, 'BooleanArray', _no_name_provided_$factory_18());
    var tmp_23 = this;
    var tmp0_unsafeCast_0_11 = Uint16Array;
    var tmp_24 = tmp0_unsafeCast_0_11;
    tmp_23._charArrayClass = new PrimitiveKClassImpl(tmp_24, 'CharArray', _no_name_provided_$factory_19());
    var tmp_25 = this;
    var tmp0_unsafeCast_0_12 = Int8Array;
    var tmp_26 = tmp0_unsafeCast_0_12;
    tmp_25._byteArrayClass = new PrimitiveKClassImpl(tmp_26, 'ByteArray', _no_name_provided_$factory_20());
    var tmp_27 = this;
    var tmp0_unsafeCast_0_13 = Int16Array;
    var tmp_28 = tmp0_unsafeCast_0_13;
    tmp_27._shortArrayClass = new PrimitiveKClassImpl(tmp_28, 'ShortArray', _no_name_provided_$factory_21());
    var tmp_29 = this;
    var tmp0_unsafeCast_0_14 = Int32Array;
    var tmp_30 = tmp0_unsafeCast_0_14;
    tmp_29._intArrayClass = new PrimitiveKClassImpl(tmp_30, 'IntArray', _no_name_provided_$factory_22());
    var tmp_31 = this;
    var tmp0_unsafeCast_0_15 = Array;
    var tmp_32 = tmp0_unsafeCast_0_15;
    tmp_31._longArrayClass = new PrimitiveKClassImpl(tmp_32, 'LongArray', _no_name_provided_$factory_23());
    var tmp_33 = this;
    var tmp0_unsafeCast_0_16 = Float32Array;
    var tmp_34 = tmp0_unsafeCast_0_16;
    tmp_33._floatArrayClass = new PrimitiveKClassImpl(tmp_34, 'FloatArray', _no_name_provided_$factory_24());
    var tmp_35 = this;
    var tmp0_unsafeCast_0_17 = Float64Array;
    var tmp_36 = tmp0_unsafeCast_0_17;
    tmp_35._doubleArrayClass = new PrimitiveKClassImpl(tmp_36, 'DoubleArray', _no_name_provided_$factory_25());
  }
  PrimitiveClasses_0.prototype._get_anyClass_ = function () {
    return this._anyClass;
  };
  PrimitiveClasses_0.prototype._get_numberClass_ = function () {
    return this._numberClass;
  };
  PrimitiveClasses_0.prototype._get_nothingClass_ = function () {
    return this._nothingClass;
  };
  PrimitiveClasses_0.prototype._get_booleanClass_ = function () {
    return this._booleanClass;
  };
  PrimitiveClasses_0.prototype._get_byteClass_ = function () {
    return this._byteClass;
  };
  PrimitiveClasses_0.prototype._get_shortClass_ = function () {
    return this._shortClass;
  };
  PrimitiveClasses_0.prototype._get_intClass_ = function () {
    return this._intClass;
  };
  PrimitiveClasses_0.prototype._get_floatClass_ = function () {
    return this._floatClass;
  };
  PrimitiveClasses_0.prototype._get_doubleClass_ = function () {
    return this._doubleClass;
  };
  PrimitiveClasses_0.prototype._get_arrayClass_ = function () {
    return this._arrayClass;
  };
  PrimitiveClasses_0.prototype._get_stringClass_ = function () {
    return this._stringClass;
  };
  PrimitiveClasses_0.prototype._get_throwableClass_ = function () {
    return this._throwableClass;
  };
  PrimitiveClasses_0.prototype._get_booleanArrayClass_ = function () {
    return this._booleanArrayClass;
  };
  PrimitiveClasses_0.prototype._get_charArrayClass_ = function () {
    return this._charArrayClass;
  };
  PrimitiveClasses_0.prototype._get_byteArrayClass_ = function () {
    return this._byteArrayClass;
  };
  PrimitiveClasses_0.prototype._get_shortArrayClass_ = function () {
    return this._shortArrayClass;
  };
  PrimitiveClasses_0.prototype._get_intArrayClass_ = function () {
    return this._intArrayClass;
  };
  PrimitiveClasses_0.prototype._get_longArrayClass_ = function () {
    return this._longArrayClass;
  };
  PrimitiveClasses_0.prototype._get_floatArrayClass_ = function () {
    return this._floatArrayClass;
  };
  PrimitiveClasses_0.prototype._get_doubleArrayClass_ = function () {
    return this._doubleArrayClass;
  };
  PrimitiveClasses_0.prototype.functionClass = function (arity) {
    var tmp0_elvis_lhs = functionClasses[arity];
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_unsafeCast_0_3 = Function;
      var tmp_0 = tmp0_unsafeCast_0_3;
      var tmp_1 = '' + 'Function' + arity;
      var result_2 = new PrimitiveKClassImpl(tmp_0, tmp_1, _no_name_provided_$factory_26(arity));
      var tmp1_asDynamic_0_5 = functionClasses;
      tmp1_asDynamic_0_5[arity] = result_2;
      tmp = result_2;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  PrimitiveClasses_0.$metadata$ = {
    simpleName: 'PrimitiveClasses',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(PrimitiveClasses_0.prototype, 'anyClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_anyClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'numberClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_numberClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'nothingClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_nothingClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'booleanClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_booleanClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'byteClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_byteClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'shortClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_shortClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'intClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_intClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'floatClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_floatClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'doubleClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_doubleClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'arrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_arrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'stringClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_stringClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'throwableClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_throwableClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'booleanArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_booleanArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'charArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_charArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'byteArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_byteArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'shortArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_shortArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'intArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_intArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'longArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_longArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'floatArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_floatArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'doubleArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_doubleArrayClass_
  });
  var PrimitiveClasses_instance;
  function PrimitiveClasses_getInstance() {
    if (PrimitiveClasses_instance == null)
      new PrimitiveClasses_0();
    return PrimitiveClasses_instance;
  }
  function _no_name_provided_$factory_7() {
    var i = new _no_name_provided__14();
    return function (p1) {
      return i.invoke_56(p1);
    };
  }
  function _no_name_provided_$factory_8() {
    var i = new _no_name_provided__15();
    return function (p1) {
      return i.invoke_56(p1);
    };
  }
  function _no_name_provided_$factory_9() {
    var i = new _no_name_provided__16();
    return function (p1) {
      return i.invoke_56(p1);
    };
  }
  function _no_name_provided_$factory_10() {
    var i = new _no_name_provided__17();
    return function (p1) {
      return i.invoke_56(p1);
    };
  }
  function _no_name_provided_$factory_11() {
    var i = new _no_name_provided__18();
    return function (p1) {
      return i.invoke_56(p1);
    };
  }
  function _no_name_provided_$factory_12() {
    var i = new _no_name_provided__19();
    return function (p1) {
      return i.invoke_56(p1);
    };
  }
  function _no_name_provided_$factory_13() {
    var i = new _no_name_provided__20();
    return function (p1) {
      return i.invoke_56(p1);
    };
  }
  function _no_name_provided_$factory_14() {
    var i = new _no_name_provided__21();
    return function (p1) {
      return i.invoke_56(p1);
    };
  }
  function _no_name_provided_$factory_15() {
    var i = new _no_name_provided__22();
    return function (p1) {
      return i.invoke_56(p1);
    };
  }
  function _no_name_provided_$factory_16() {
    var i = new _no_name_provided__23();
    return function (p1) {
      return i.invoke_56(p1);
    };
  }
  function _no_name_provided_$factory_17() {
    var i = new _no_name_provided__24();
    return function (p1) {
      return i.invoke_56(p1);
    };
  }
  function _no_name_provided_$factory_18() {
    var i = new _no_name_provided__25();
    return function (p1) {
      return i.invoke_56(p1);
    };
  }
  function _no_name_provided_$factory_19() {
    var i = new _no_name_provided__26();
    return function (p1) {
      return i.invoke_56(p1);
    };
  }
  function _no_name_provided_$factory_20() {
    var i = new _no_name_provided__27();
    return function (p1) {
      return i.invoke_56(p1);
    };
  }
  function _no_name_provided_$factory_21() {
    var i = new _no_name_provided__28();
    return function (p1) {
      return i.invoke_56(p1);
    };
  }
  function _no_name_provided_$factory_22() {
    var i = new _no_name_provided__29();
    return function (p1) {
      return i.invoke_56(p1);
    };
  }
  function _no_name_provided_$factory_23() {
    var i = new _no_name_provided__30();
    return function (p1) {
      return i.invoke_56(p1);
    };
  }
  function _no_name_provided_$factory_24() {
    var i = new _no_name_provided__31();
    return function (p1) {
      return i.invoke_56(p1);
    };
  }
  function _no_name_provided_$factory_25() {
    var i = new _no_name_provided__32();
    return function (p1) {
      return i.invoke_56(p1);
    };
  }
  function _no_name_provided_$factory_26($arity) {
    var i = new _no_name_provided__33($arity);
    return function (p1) {
      return i.invoke_56(p1);
    };
  }
  function functionClasses$init$() {
    var tmp0_arrayOfNulls_0 = 0;
    return fillArrayVal(Array(tmp0_arrayOfNulls_0), null);
  }
  function getKClass_0(jClass) {
    var tmp;
    if (Array.isArray(jClass)) {
      tmp = getKClassM_0(jClass);
    } else {
      tmp = getKClass1_0(jClass);
    }
    return tmp;
  }
  function getKClassM_0(jClasses) {
    var tmp0_subject = jClasses.length;
    var tmp;
    switch (tmp0_subject) {
      case 1:
        tmp = getKClass1_0(jClasses[0]);
        break;
      case 0:
        var tmp0_unsafeCast_0 = NothingKClassImpl_getInstance();
        tmp = tmp0_unsafeCast_0;
        break;
      default:var tmp1_unsafeCast_0 = new ErrorKClass();
        tmp = tmp1_unsafeCast_0;
        break;
    }
    return tmp;
  }
  function getKClass1_0(jClass) {
    if (jClass === String) {
      var tmp0_unsafeCast_0 = PrimitiveClasses_getInstance()._stringClass;
      return tmp0_unsafeCast_0;
    }var metadata = jClass.$metadata$;
    var tmp;
    if (metadata != null) {
      var tmp_0;
      if (metadata.$kClass$ == null) {
        var kClass = new SimpleKClassImpl(jClass);
        metadata.$kClass$ = kClass;
        tmp_0 = kClass;
      } else {
        tmp_0 = metadata.$kClass$;
      }
      tmp = tmp_0;
    } else {
      tmp = new SimpleKClassImpl(jClass);
    }
    return tmp;
  }
  function getKClassFromExpression_0(e) {
    var tmp0_subject = typeof e;
    var tmp;
    switch (tmp0_subject) {
      case 'string':
        tmp = PrimitiveClasses_getInstance()._stringClass;
        break;
      case 'number':
        var tmp_0;
        var tmp0_asDynamic_0 = jsBitwiseOr(e, 0);
        if (tmp0_asDynamic_0 === e) {
          tmp_0 = PrimitiveClasses_getInstance()._intClass;
        } else {
          {
            tmp_0 = PrimitiveClasses_getInstance()._doubleClass;
          }
        }

        tmp = tmp_0;
        break;
      case 'boolean':
        tmp = PrimitiveClasses_getInstance()._booleanClass;
        break;
      case 'function':
        var tmp_1 = PrimitiveClasses_getInstance();
        tmp = tmp_1.functionClass(e.length);
        break;
      default:var tmp_2;
        if (isBooleanArray(e)) {
          tmp_2 = PrimitiveClasses_getInstance()._booleanArrayClass;
        } else {
          if (isCharArray(e)) {
            tmp_2 = PrimitiveClasses_getInstance()._charArrayClass;
          } else {
            if (isByteArray(e)) {
              tmp_2 = PrimitiveClasses_getInstance()._byteArrayClass;
            } else {
              if (isShortArray(e)) {
                tmp_2 = PrimitiveClasses_getInstance()._shortArrayClass;
              } else {
                if (isIntArray(e)) {
                  tmp_2 = PrimitiveClasses_getInstance()._intArrayClass;
                } else {
                  if (isLongArray(e)) {
                    tmp_2 = PrimitiveClasses_getInstance()._longArrayClass;
                  } else {
                    if (isFloatArray(e)) {
                      tmp_2 = PrimitiveClasses_getInstance()._floatArrayClass;
                    } else {
                      if (isDoubleArray(e)) {
                        tmp_2 = PrimitiveClasses_getInstance()._doubleArrayClass;
                      } else {
                        if (isInterface(e, KClass)) {
                          tmp_2 = getKClass_0(KClass);
                        } else {
                          if (isArray(e)) {
                            tmp_2 = PrimitiveClasses_getInstance()._arrayClass;
                          } else {
                            {
                              var constructor = Object.getPrototypeOf(e).constructor;
                              var tmp_3;
                              if (constructor === Object) {
                                tmp_3 = PrimitiveClasses_getInstance()._anyClass;
                              } else if (constructor === Error) {
                                tmp_3 = PrimitiveClasses_getInstance()._throwableClass;
                              } else {
                                var jsClass_0 = constructor;
                                tmp_3 = getKClass1_0(jsClass_0);
                              }
                              tmp_2 = tmp_3;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }

        tmp = tmp_2;
        break;
    }
    var tmp1_unsafeCast_0 = tmp;
    return tmp1_unsafeCast_0;
  }
  function Appendable() {
  }
  Appendable.$metadata$ = {
    simpleName: 'Appendable',
    kind: 'interface',
    interfaces: []
  };
  function StringBuilder_init_$Init$(capacity, $this) {
    StringBuilder_init_$Init$_0($this);
    return $this;
  }
  function StringBuilder_init_$Create$(capacity) {
    return StringBuilder_init_$Init$(capacity, Object.create(StringBuilder.prototype));
  }
  function StringBuilder_init_$Init$_0($this) {
    StringBuilder.call($this, '');
    return $this;
  }
  function StringBuilder_init_$Create$_0() {
    return StringBuilder_init_$Init$_0(Object.create(StringBuilder.prototype));
  }
  function StringBuilder(content) {
    this._string = !(content === undefined) ? content : '';
  }
  StringBuilder.prototype._get_length__0 = function () {
    var tmp0_asDynamic_0 = this._string;
    return tmp0_asDynamic_0.length;
  };
  StringBuilder.prototype.get_42 = function (index) {
    var tmp0_getOrElse_0 = this._string;
    var tmp;
    if (index >= 0 ? index <= _get_lastIndex__0(tmp0_getOrElse_0) : false) {
      tmp = charSequenceGet(tmp0_getOrElse_0, index);
    } else {
      throw IndexOutOfBoundsException_init_$Create$('' + 'index: ' + index + ', length: ' + this._get_length__0() + '}');
    }
    return tmp;
  };
  StringBuilder.prototype.subSequence_1 = function (startIndex, endIndex) {
    var tmp0_substring_0 = this._string;
    return tmp0_substring_0.substring(startIndex, endIndex);
  };
  StringBuilder.prototype.append_2 = function (value) {
    var tmp0_this = this;
    tmp0_this._string = tmp0_this._string + value;
    return this;
  };
  StringBuilder.prototype.append_3 = function (value) {
    var tmp0_this = this;
    tmp0_this._string = tmp0_this._string + toString_0(value);
    return this;
  };
  StringBuilder.prototype.append_4 = function (value) {
    var tmp0_this = this;
    tmp0_this._string = tmp0_this._string + toString_0(value);
    return this;
  };
  StringBuilder.prototype.append_5 = function (value) {
    var tmp0_this = this;
    var tmp = tmp0_this;
    var tmp_0 = tmp0_this._string;
    var tmp1_elvis_lhs = value;
    tmp._string = tmp_0 + (tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs);
    return this;
  };
  StringBuilder.prototype.toString = function () {
    return this._string;
  };
  StringBuilder.$metadata$ = {
    simpleName: 'StringBuilder',
    kind: 'class',
    interfaces: [Appendable, CharSequence]
  };
  function isWhitespace(_this_) {
    return matches(_this_.toString(), '[\\s\\xA0]');
  }
  function uppercaseChar(_this_) {
    var tmp0_asDynamic_0 = _this_.toString();
    var tmp = tmp0_asDynamic_0.toUpperCase();
    var uppercase = (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
    return uppercase.length > 1 ? _this_ : charSequenceGet(uppercase, 0);
  }
  function isBlank(_this_) {
    var tmp;
    if (charSequenceLength(_this_) === 0) {
      tmp = true;
    } else {
      var tmp_0;
      if (typeof _this_ === 'string') {
        tmp_0 = _this_;
      } else {
        {
          tmp_0 = toString_1(_this_);
        }
      }
      tmp = matches(tmp_0, '^[\\s\\xA0]+$');
    }
    return tmp;
  }
  function matches(_this_, regex) {
    var result = _this_.match(regex);
    return !(result == null) ? !(result.length === 0) : false;
  }
  function regionMatches(_this_, thisOffset, other, otherOffset, length, ignoreCase) {
    return regionMatchesImpl(_this_, thisOffset, other, otherOffset, length, ignoreCase);
  }
  function Companion_6() {
    Companion_instance_5 = this;
    this._MIN_VALUE_0 = new Char(0);
    this._MAX_VALUE_0 = new Char(65535);
    this._MIN_HIGH_SURROGATE = new Char(55296);
    this._MAX_HIGH_SURROGATE = new Char(56319);
    this._MIN_LOW_SURROGATE = new Char(56320);
    this._MAX_LOW_SURROGATE = new Char(57343);
    this._MIN_SURROGATE = new Char(55296);
    this._MAX_SURROGATE = new Char(57343);
    this._SIZE_BYTES_0 = 2;
    this._SIZE_BITS_0 = 16;
  }
  Companion_6.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_6();
    return Companion_instance_5;
  }
  function Char(code) {
    Companion_getInstance_5();
    var tmp = this;
    tmp._value = _UShort___get_data__impl_(code) & 65535;
  }
  Char.prototype.compareTo_1 = function (other) {
    return this._value - other._value | 0;
  };
  Char.prototype.compareTo_6 = function (other) {
    return this.compareTo_1(other instanceof Char ? other : THROW_CCE());
  };
  Char.prototype.toInt_5 = function () {
    return this._value;
  };
  Char.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Char))
      return false;
    else {
    }
    return this._value === other._value;
  };
  Char.prototype.hashCode = function () {
    return this._value;
  };
  Char.prototype.toString = function () {
    var tmp0_unsafeCast_0 = String.fromCharCode(this._value);
    return tmp0_unsafeCast_0;
  };
  Char.$metadata$ = {
    simpleName: 'Char',
    kind: 'class',
    interfaces: [Comparable]
  };
  function Iterable() {
  }
  Iterable.$metadata$ = {
    simpleName: 'Iterable',
    kind: 'interface',
    interfaces: []
  };
  function List() {
  }
  List.$metadata$ = {
    simpleName: 'List',
    kind: 'interface',
    interfaces: [Collection]
  };
  function MutableSet() {
  }
  MutableSet.$metadata$ = {
    simpleName: 'MutableSet',
    kind: 'interface',
    interfaces: [Set, MutableCollection]
  };
  function Entry() {
  }
  Entry.$metadata$ = {
    simpleName: 'Entry',
    kind: 'interface',
    interfaces: []
  };
  function Map_0() {
  }
  Map_0.$metadata$ = {
    simpleName: 'Map',
    kind: 'interface',
    interfaces: []
  };
  function Collection() {
  }
  Collection.$metadata$ = {
    simpleName: 'Collection',
    kind: 'interface',
    interfaces: [Iterable]
  };
  function Set() {
  }
  Set.$metadata$ = {
    simpleName: 'Set',
    kind: 'interface',
    interfaces: [Collection]
  };
  function MutableCollection() {
  }
  MutableCollection.$metadata$ = {
    simpleName: 'MutableCollection',
    kind: 'interface',
    interfaces: [Collection, MutableIterable]
  };
  function MutableIterable() {
  }
  MutableIterable.$metadata$ = {
    simpleName: 'MutableIterable',
    kind: 'interface',
    interfaces: [Iterable]
  };
  function MutableList() {
  }
  MutableList.$metadata$ = {
    simpleName: 'MutableList',
    kind: 'interface',
    interfaces: [List, MutableCollection]
  };
  function MutableEntry() {
  }
  MutableEntry.$metadata$ = {
    simpleName: 'MutableEntry',
    kind: 'interface',
    interfaces: [Entry]
  };
  function MutableMap() {
  }
  MutableMap.$metadata$ = {
    simpleName: 'MutableMap',
    kind: 'interface',
    interfaces: [Map_0]
  };
  function Companion_7() {
    Companion_instance_6 = this;
  }
  Companion_7.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_6;
  function Companion_getInstance_6() {
    if (Companion_instance_6 == null)
      new Companion_7();
    return Companion_instance_6;
  }
  function Enum(name, ordinal) {
    Companion_getInstance_6();
    this._name = name;
    this._ordinal = ordinal;
  }
  Enum.prototype.compareTo_3 = function (other) {
    return compareTo(this._ordinal, other._ordinal);
  };
  Enum.prototype.compareTo_6 = function (other) {
    return this.compareTo_3(other instanceof Enum ? other : THROW_CCE());
  };
  Enum.prototype.equals = function (other) {
    return this === other;
  };
  Enum.prototype.hashCode = function () {
    return identityHashCode(this);
  };
  Enum.prototype.toString = function () {
    return this._name;
  };
  Enum.$metadata$ = {
    simpleName: 'Enum',
    kind: 'class',
    interfaces: [Comparable]
  };
  function toString_0(_this_) {
    var tmp0_safe_receiver = _this_;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toString_1(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs;
  }
  function fillArrayVal(array, initValue) {
    var inductionVariable = 0;
    var last = array.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        array[i] = initValue;
      }
       while (!(i === last));
    return array;
  }
  function arrayIterator(array) {
    return new _no_name_provided__34(array);
  }
  function _no_name_provided__34($array) {
    this._$array = $array;
    this._index_0 = 0;
  }
  _no_name_provided__34.prototype.hasNext_10 = function () {
    return !(this._index_0 === this._$array.length);
  };
  _no_name_provided__34.prototype.next_10 = function () {
    var tmp;
    if (!(this._index_0 === this._$array.length)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this._index_0;
      tmp0_this._index_0 = tmp1 + 1 | 0;
      tmp = this._$array[tmp1];
    } else {
      throw NoSuchElementException_init_$Create$_0('' + this._index_0);
    }
    return tmp;
  };
  _no_name_provided__34.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator]
  };
  var buf;
  var bufFloat64;
  var bufInt32;
  var lowIndex;
  var highIndex;
  function getNumberHashCode(obj) {
    var tmp0_unsafeCast_0 = jsBitwiseOr(obj, 0);
    if (tmp0_unsafeCast_0 === obj) {
      return numberToInt(obj);
    } else {
    }
    bufFloat64[0] = obj;
    return imul(bufInt32[highIndex], 31) + bufInt32[lowIndex] | 0;
  }
  function bufFloat64$init$() {
    var tmp0_unsafeCast_0 = new Float64Array(buf);
    return tmp0_unsafeCast_0;
  }
  function bufInt32$init$() {
    var tmp0_unsafeCast_0 = new Int32Array(buf);
    return tmp0_unsafeCast_0;
  }
  function lowIndex$init$() {
    bufFloat64[0] = -1.0;
    return !(bufInt32[0] === 0) ? 1 : 0;
  }
  function charSequenceGet(a, index) {
    var tmp;
    if (isString(a)) {
      var tmp0_unsafeCast_0 = a.charCodeAt(index);
      var tmp1_Char_0 = tmp0_unsafeCast_0;
      var tmp_0;
      var tmp0__get_code__0_1 = new Char(0);
      if (tmp1_Char_0 < tmp0__get_code__0_1.toInt_5()) {
        tmp_0 = true;
      } else {
        {
          var tmp1__get_code__0_2 = new Char(65535);
          tmp_0 = tmp1_Char_0 > tmp1__get_code__0_2.toInt_5();
        }
      }
      if (tmp_0) {
        throw IllegalArgumentException_init_$Create$('' + 'Invalid Char code: ' + tmp1_Char_0);
      } else {
      }
      tmp = new Char(_UShort___init__impl_(toShort(tmp1_Char_0)));
    } else {
      tmp = a.get_42(index);
    }
    return tmp;
  }
  function isString(a) {
    return typeof a === 'string';
  }
  function charSequenceLength(a) {
    var tmp;
    if (isString(a)) {
      var tmp0_unsafeCast_0 = a.length;
      tmp = tmp0_unsafeCast_0;
    } else {
      tmp = a._get_length__0();
    }
    return tmp;
  }
  function charSequenceSubSequence(a, startIndex, endIndex) {
    var tmp;
    if (isString(a)) {
      var tmp0_unsafeCast_0 = a.substring(startIndex, endIndex);
      tmp = tmp0_unsafeCast_0;
    } else {
      tmp = a.subSequence_1(startIndex, endIndex);
    }
    return tmp;
  }
  function arrayToString(array) {
    return joinToString$default(array, ', ', '[', ']', 0, null, _no_name_provided_$factory_27(), 24, null);
  }
  function _no_name_provided__35() {
  }
  _no_name_provided__35.prototype.invoke_56 = function (it) {
    return toString_1(it);
  };
  _no_name_provided__35.prototype.invoke_84 = function (p1) {
    return this.invoke_56((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__35.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_27() {
    var i = new _no_name_provided__35();
    return function (p1) {
      return i.invoke_56(p1);
    };
  }
  function compareTo(a, b) {
    var tmp0_subject = typeof a;
    var tmp;
    switch (tmp0_subject) {
      case 'number':
        var tmp_0;
        if (typeof b === 'number') {
          tmp_0 = doubleCompareTo(a, b);
        } else {
          if (b instanceof Long) {
            tmp_0 = doubleCompareTo(a, b.toDouble_4());
          } else {
            {
              tmp_0 = primitiveCompareTo(a, b);
            }
          }
        }

        tmp = tmp_0;
        break;
      case 'string':
      case 'boolean':
        tmp = primitiveCompareTo(a, b);
        break;
      default:tmp = compareToDoNotIntrinsicify(a, b);
        break;
    }
    return tmp;
  }
  function doubleCompareTo(a, b) {
    var tmp;
    if (a < b) {
      tmp = -1;
    } else if (a > b) {
      tmp = 1;
    } else if (a === b) {
      var tmp_0;
      if (a !== 0) {
        tmp_0 = 0;
      } else {
        var tmp0_asDynamic_0 = 1;
        var ia = tmp0_asDynamic_0 / a;
        var tmp_1;
        var tmp1_asDynamic_0 = 1;
        if (ia === tmp1_asDynamic_0 / b) {
          tmp_1 = 0;
        } else {
          if (ia < 0) {
            tmp_1 = -1;
          } else {
            {
              tmp_1 = 1;
            }
          }
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    } else if (a !== a) {
      tmp = b !== b ? 0 : 1;
    } else {
      tmp = -1;
    }
    return tmp;
  }
  function primitiveCompareTo(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }
  function compareToDoNotIntrinsicify(a, b) {
    return a.compareTo_6(b);
  }
  function identityHashCode(obj) {
    return getObjectHashCode(obj);
  }
  function getObjectHashCode(obj) {
    if (!jsIn('kotlinHashCodeValue$', obj)) {
      var hash = jsBitwiseOr(Math.random() * 4.294967296E9, 0);
      var descriptor = new Object();
      descriptor.value = hash;
      descriptor.enumerable = false;
      Object.defineProperty(obj, 'kotlinHashCodeValue$', descriptor);
    }var tmp0_unsafeCast_0 = obj['kotlinHashCodeValue$'];
    return tmp0_unsafeCast_0;
  }
  function toString_1(o) {
    var tmp;
    if (o == null) {
      tmp = 'null';
    } else if (isArrayish(o)) {
      tmp = '[...]';
    } else {
      var tmp0_unsafeCast_0 = o.toString();
      tmp = tmp0_unsafeCast_0;
    }
    return tmp;
  }
  function hashCode(obj) {
    if (obj == null)
      return 0;
    var tmp0_subject = typeof obj;
    var tmp;
    switch (tmp0_subject) {
      case 'object':
        tmp = 'function' === typeof obj.hashCode ? obj.hashCode() : getObjectHashCode(obj);
        break;
      case 'function':
        tmp = getObjectHashCode(obj);
        break;
      case 'number':
        tmp = getNumberHashCode(obj);
        break;
      case 'boolean':
        var tmp_0;
        if (obj) {
          tmp_0 = 1;
        } else {
          {
            tmp_0 = 0;
          }
        }

        tmp = tmp_0;
        break;
      default:tmp = getStringHashCode(String(obj));
        break;
    }
    return tmp;
  }
  function getStringHashCode(str) {
    var hash = 0;
    var length = str.length;
    var inductionVariable = 0;
    var last = length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var code = str.charCodeAt(i);
        hash = imul(hash, 31) + code | 0;
      }
       while (!(i === last));
    return hash;
  }
  function anyToString(o) {
    return Object.prototype.toString.call(o);
  }
  function equals_0(obj1, obj2) {
    if (obj1 == null) {
      return obj2 == null;
    }if (obj2 == null) {
      return false;
    }if (typeof obj1 === 'object' ? typeof obj1.equals === 'function' : false) {
      return obj1.equals(obj2);
    }if (obj1 !== obj1) {
      return obj2 !== obj2;
    }if (typeof obj1 === 'number' ? typeof obj2 === 'number' : false) {
      var tmp;
      if (obj1 === obj2) {
        var tmp_0;
        if (obj1 !== 0) {
          tmp_0 = true;
        } else {
          var tmp0_asDynamic_0 = 1;
          var tmp_1 = tmp0_asDynamic_0 / obj1;
          var tmp1_asDynamic_0 = 1;
          tmp_0 = tmp_1 === tmp1_asDynamic_0 / obj2;
        }
        tmp = tmp_0;
      } else {
        tmp = false;
      }
      return tmp;
    }return obj1 === obj2;
  }
  function captureStack(instance, constructorFunction) {
    if (Error.captureStackTrace != null) {
      Error.captureStackTrace(instance, constructorFunction);
    } else {
      instance.stack = (new Error()).stack;
    }
  }
  function extendThrowable(this_, message, cause) {
    Error.call(this_);
    setPropertiesToThrowableInstance(this_, message, cause);
  }
  function setPropertiesToThrowableInstance(this_, message, cause) {
    if (!hasOwnPrototypeProperty(this_, 'message')) {
      var tmp;
      if (message == null) {
        var tmp_0;
        if (!(message === null)) {
          var tmp0_safe_receiver = cause;
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
          tmp_0 = tmp1_elvis_lhs == null ? undefined : tmp1_elvis_lhs;
        } else {
          tmp_0 = undefined;
        }
        tmp = tmp_0;
      } else {
        tmp = message;
      }
      this_.message = tmp;
    }if (!hasOwnPrototypeProperty(this_, 'cause')) {
      this_.cause = cause;
    }this_.name = Object.getPrototypeOf(this_).constructor.name;
  }
  function hasOwnPrototypeProperty(o, name) {
    var tmp0_unsafeCast_0 = Object.getPrototypeOf(o).hasOwnProperty(name);
    return tmp0_unsafeCast_0;
  }
  function getContinuation() {
    throw Exception_init_$Create$('Implemented as intrinsic');
  }
  function ensureNotNull(v) {
    var tmp;
    if (v == null) {
      THROW_NPE();
    } else {
      tmp = v;
    }
    return tmp;
  }
  function THROW_NPE() {
    throw NullPointerException_init_$Create$();
  }
  function noWhenBranchMatchedException() {
    throw NoWhenBranchMatchedException_init_$Create$();
  }
  function THROW_CCE() {
    throw ClassCastException_init_$Create$();
  }
  function throwUninitializedPropertyAccessException(name) {
    throw UninitializedPropertyAccessException_init_$Create$('' + 'lateinit property ' + name + ' has not been initialized');
  }
  function Companion_8() {
    Companion_instance_7 = this;
    this._MIN_VALUE_1 = new Long(0, -2147483648);
    this._MAX_VALUE_1 = new Long(-1, 2147483647);
    this._SIZE_BYTES_1 = 8;
    this._SIZE_BITS_1 = 64;
  }
  Companion_8.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_7;
  function Companion_getInstance_7() {
    if (Companion_instance_7 == null)
      new Companion_8();
    return Companion_instance_7;
  }
  function Long(low, high) {
    Companion_getInstance_7();
    Number_0.call(this);
    this._low = low;
    this._high = high;
  }
  Long.prototype.compareTo_36 = function (other) {
    return compare(this, other);
  };
  Long.prototype.compareTo_6 = function (other) {
    return this.compareTo_36(other instanceof Long ? other : THROW_CCE());
  };
  Long.prototype.plus_45 = function (other) {
    return add(this, other);
  };
  Long.prototype.minus_27 = function (other) {
    return subtract(this, other);
  };
  Long.prototype.div_27 = function (other) {
    return divide(this, other);
  };
  Long.prototype.unaryMinus_4 = function () {
    return this.inv_0().plus_45(new Long(1, 0));
  };
  Long.prototype.inv_0 = function () {
    return new Long(~this._low, ~this._high);
  };
  Long.prototype.toInt_5 = function () {
    return this._low;
  };
  Long.prototype.toDouble_4 = function () {
    return toNumber(this);
  };
  Long.prototype.valueOf = function () {
    return this.toDouble_4();
  };
  Long.prototype.equals = function (other) {
    var tmp;
    if (other instanceof Long) {
      tmp = equalsLong(this, other);
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  Long.prototype.hashCode = function () {
    return hashCode_0(this);
  };
  Long.prototype.toString = function () {
    return toStringImpl(this, 10);
  };
  Long.$metadata$ = {
    simpleName: 'Long',
    kind: 'class',
    interfaces: [Comparable]
  };
  var ZERO;
  var ONE;
  var NEG_ONE;
  var MAX_VALUE;
  var MIN_VALUE;
  var TWO_PWR_24_;
  function compare(_this_, other) {
    if (equalsLong(_this_, other)) {
      return 0;
    }var thisNeg = isNegative(_this_);
    var otherNeg = isNegative(other);
    return (thisNeg ? !otherNeg : false) ? -1 : (!thisNeg ? otherNeg : false) ? 1 : isNegative(subtract(_this_, other)) ? -1 : 1;
  }
  function add(_this_, other) {
    var a48 = _this_._high >>> 16;
    var a32 = _this_._high & 65535;
    var a16 = _this_._low >>> 16;
    var a00 = _this_._low & 65535;
    var b48 = other._high >>> 16;
    var b32 = other._high & 65535;
    var b16 = other._low >>> 16;
    var b00 = other._low & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + (a00 + b00 | 0) | 0;
    c16 = c16 + (c00 >>> 16) | 0;
    c00 = c00 & 65535;
    c16 = c16 + (a16 + b16 | 0) | 0;
    c32 = c32 + (c16 >>> 16) | 0;
    c16 = c16 & 65535;
    c32 = c32 + (a32 + b32 | 0) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (a48 + b48 | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function subtract(_this_, other) {
    return add(_this_, other.unaryMinus_4());
  }
  function multiply(_this_, other) {
    if (isZero(_this_)) {
      return ZERO;
    } else if (isZero(other)) {
      return ZERO;
    }if (equalsLong(_this_, MIN_VALUE)) {
      return isOdd(other) ? MIN_VALUE : ZERO;
    } else if (equalsLong(other, MIN_VALUE)) {
      return isOdd(_this_) ? MIN_VALUE : ZERO;
    }if (isNegative(_this_)) {
      var tmp;
      if (isNegative(other)) {
        tmp = multiply(negate(_this_), negate(other));
      } else {
        tmp = negate(multiply(negate(_this_), other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(multiply(_this_, negate(other)));
    }if (lessThan(_this_, TWO_PWR_24_) ? lessThan(other, TWO_PWR_24_) : false) {
      return fromNumber(toNumber(_this_) * toNumber(other));
    }var a48 = _this_._high >>> 16;
    var a32 = _this_._high & 65535;
    var a16 = _this_._low >>> 16;
    var a00 = _this_._low & 65535;
    var b48 = other._high >>> 16;
    var b32 = other._high & 65535;
    var b16 = other._low >>> 16;
    var b00 = other._low & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + imul(a00, b00) | 0;
    c16 = c16 + (c00 >>> 16) | 0;
    c00 = c00 & 65535;
    c16 = c16 + imul(a16, b00) | 0;
    c32 = c32 + (c16 >>> 16) | 0;
    c16 = c16 & 65535;
    c16 = c16 + imul(a00, b16) | 0;
    c32 = c32 + (c16 >>> 16) | 0;
    c16 = c16 & 65535;
    c32 = c32 + imul(a32, b00) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a16, b16) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a00, b32) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (((imul(a48, b00) + imul(a32, b16) | 0) + imul(a16, b32) | 0) + imul(a00, b48) | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function divide(_this_, other) {
    if (isZero(other)) {
      throw Exception_init_$Create$('division by zero');
    } else if (isZero(_this_)) {
      return ZERO;
    }if (equalsLong(_this_, MIN_VALUE)) {
      if (equalsLong(other, ONE) ? true : equalsLong(other, NEG_ONE)) {
        return MIN_VALUE;
      } else if (equalsLong(other, MIN_VALUE)) {
        return ONE;
      } else {
        var halfThis = shiftRight(_this_, 1);
        var approx = shiftLeft(halfThis.div_27(other), 1);
        if (equalsLong(approx, ZERO)) {
          return isNegative(other) ? ONE : NEG_ONE;
        } else {
          var rem = subtract(_this_, multiply(other, approx));
          return add(approx, rem.div_27(other));
        }
      }
    } else if (equalsLong(other, MIN_VALUE)) {
      return ZERO;
    }if (isNegative(_this_)) {
      var tmp;
      if (isNegative(other)) {
        tmp = negate(_this_).div_27(negate(other));
      } else {
        tmp = negate(negate(_this_).div_27(other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(_this_.div_27(negate(other)));
    }var res = ZERO;
    var rem_0 = _this_;
    while (greaterThanOrEqual(rem_0, other)) {
      var approxDouble = toNumber(rem_0) / toNumber(other);
      var approx2 = Math.max(1.0, Math.floor(approxDouble));
      var log2 = Math.ceil(Math.log(approx2) / Math.LN2);
      var delta_0 = log2 <= 48.0 ? 1.0 : Math.pow(2, log2 - 48);
      var approxRes = fromNumber(approx2);
      var approxRem = multiply(approxRes, other);
      while (isNegative(approxRem) ? true : greaterThan(approxRem, rem_0)) {
        approx2 = approx2 - delta_0;
        approxRes = fromNumber(approx2);
        approxRem = multiply(approxRes, other);
      }
      if (isZero(approxRes)) {
        approxRes = ONE;
      }res = add(res, approxRes);
      rem_0 = subtract(rem_0, approxRem);
    }
    return res;
  }
  function shiftLeft(_this_, numBits) {
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this_;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this_._low << numBits_0, _this_._high << numBits_0 | _this_._low >>> (32 - numBits_0 | 0));
      } else {
        return new Long(0, _this_._low << (numBits_0 - 32 | 0));
      }
    }
  }
  function shiftRight(_this_, numBits) {
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this_;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this_._low >>> numBits_0 | _this_._high << (32 - numBits_0 | 0), _this_._high >> numBits_0);
      } else {
        return new Long(_this_._high >> (numBits_0 - 32 | 0), _this_._high >= 0 ? 0 : -1);
      }
    }
  }
  function toNumber(_this_) {
    return _this_._high * 4.294967296E9 + getLowBitsUnsigned(_this_);
  }
  function equalsLong(_this_, other) {
    return _this_._high === other._high ? _this_._low === other._low : false;
  }
  function hashCode_0(l) {
    return l._low ^ l._high;
  }
  function toStringImpl(_this_, radix) {
    if (radix < 2 ? true : 36 < radix) {
      throw Exception_init_$Create$('' + 'radix out of range: ' + radix);
    }if (isZero(_this_)) {
      return '0';
    }if (isNegative(_this_)) {
      if (equalsLong(_this_, MIN_VALUE)) {
        var radixLong = fromInt(radix);
        var div = _this_.div_27(radixLong);
        var rem = subtract(multiply(div, radixLong), _this_).toInt_5();
        var tmp = toStringImpl(div, radix);
        var tmp0_unsafeCast_0 = rem.toString(radix);
        return tmp + tmp0_unsafeCast_0;
      } else {
        return '' + '-' + toStringImpl(negate(_this_), radix);
      }
    }var radixToPower = fromNumber(Math.pow(radix, 6.0));
    var rem_0 = _this_;
    var result = '';
    while (true) {
      var remDiv = rem_0.div_27(radixToPower);
      var intval = subtract(rem_0, multiply(remDiv, radixToPower)).toInt_5();
      var tmp1_unsafeCast_0 = intval.toString(radix);
      var digits = tmp1_unsafeCast_0;
      rem_0 = remDiv;
      if (isZero(rem_0)) {
        return digits + result;
      } else {
        while (digits.length < 6) {
          digits = '0' + digits;
        }
        result = digits + result;
      }
    }
  }
  function fromInt(value) {
    return new Long(value, value < 0 ? -1 : 0);
  }
  function isNegative(_this_) {
    return _this_._high < 0;
  }
  function isZero(_this_) {
    return _this_._high === 0 ? _this_._low === 0 : false;
  }
  function isOdd(_this_) {
    return (_this_._low & 1) === 1;
  }
  function negate(_this_) {
    return _this_.unaryMinus_4();
  }
  function lessThan(_this_, other) {
    return compare(_this_, other) < 0;
  }
  function fromNumber(value) {
    if (isNaN_0(value)) {
      return ZERO;
    } else if (value <= -9.223372036854776E18) {
      return MIN_VALUE;
    } else if (value + 1 >= 9.223372036854776E18) {
      return MAX_VALUE;
    } else if (value < 0.0) {
      return negate(fromNumber(-value));
    } else {
      var twoPwr32 = 4.294967296E9;
      return new Long(jsBitwiseOr(value % twoPwr32, 0), jsBitwiseOr(value / twoPwr32, 0));
    }
  }
  function greaterThan(_this_, other) {
    return compare(_this_, other) > 0;
  }
  function greaterThanOrEqual(_this_, other) {
    return compare(_this_, other) >= 0;
  }
  function getLowBitsUnsigned(_this_) {
    return _this_._low >= 0 ? _this_._low : 4.294967296E9 + _this_._low;
  }
  function imul(a_local, b_local) {
    var lhs = jsBitwiseAnd(a_local, 4.29490176E9) * jsBitwiseAnd(b_local, 65535);
    var rhs = jsBitwiseAnd(a_local, 65535) * b_local;
    return jsBitwiseOr(lhs + rhs, 0);
  }
  function numberToInt(a) {
    var tmp;
    if (a instanceof Long) {
      tmp = a.toInt_5();
    } else {
      {
        tmp = doubleToInt(a);
      }
    }
    return tmp;
  }
  function doubleToInt(a) {
    return a > 2.147483647E9 ? 2147483647 : a < -2.147483648E9 ? -2147483648 : jsBitwiseOr(a, 0);
  }
  function toShort(a) {
    var tmp0_unsafeCast_0 = a << 16 >> 16;
    return tmp0_unsafeCast_0;
  }
  function numberToChar(a) {
    var tmp0_Char_0 = numberToInt(a) & 65535;
    var tmp;
    var tmp0__get_code__0_1 = new Char(0);
    if (tmp0_Char_0 < tmp0__get_code__0_1.toInt_5()) {
      tmp = true;
    } else {
      {
        var tmp1__get_code__0_2 = new Char(65535);
        tmp = tmp0_Char_0 > tmp1__get_code__0_2.toInt_5();
      }
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('' + 'Invalid Char code: ' + tmp0_Char_0);
    } else {
    }
    return new Char(_UShort___init__impl_(toShort(tmp0_Char_0)));
  }
  function numberRangeToNumber(start, endInclusive) {
    return new IntRange(start, endInclusive);
  }
  function isArrayish(o) {
    var tmp;
    if (isJsArray(o)) {
      tmp = true;
    } else {
      var tmp0_unsafeCast_0 = ArrayBuffer.isView(o);
      tmp = tmp0_unsafeCast_0;
    }
    return tmp;
  }
  function isJsArray(obj) {
    var tmp0_unsafeCast_0 = Array.isArray(obj);
    return tmp0_unsafeCast_0;
  }
  function isInterface(obj, iface) {
    var tmp0_elvis_lhs = obj.constructor;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var ctor = tmp;
    return isInterfaceImpl(ctor, iface);
  }
  function isInterfaceImpl(ctor, iface) {
    if (ctor === iface)
      return true;
    var metadata = ctor.$metadata$;
    if (!(metadata == null)) {
      var interfaces = metadata.interfaces;
      var indexedObject = interfaces;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var i = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (isInterfaceImpl(i, iface)) {
          return true;
        }}
    }var superPrototype = !(ctor.prototype == null) ? Object.getPrototypeOf(ctor.prototype) : null;
    var superConstructor = superPrototype != null ? superPrototype.constructor : null;
    return !(superConstructor == null) ? isInterfaceImpl(superConstructor, iface) : false;
  }
  function isArray(obj) {
    var tmp;
    if (isJsArray(obj)) {
      tmp = !obj.$type$;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function isObject(obj) {
    var objTypeOf = typeof obj;
    var tmp0_subject = objTypeOf;
    switch (tmp0_subject) {
      case 'string':
        return true;
      case 'number':
        return true;
      case 'boolean':
        return true;
      case 'function':
        return true;
      default:return jsInstanceOf(obj, Object);
    }
  }
  function isNumber(a) {
    var tmp;
    if (typeof a === 'number') {
      tmp = true;
    } else {
      tmp = a instanceof Long;
    }
    return tmp;
  }
  function isCharSequence(value) {
    return typeof value === 'string' ? true : isInterface(value, _get_js_(getKClass_0(CharSequence)));
  }
  function isBooleanArray(a) {
    return isJsArray(a) ? a.$type$ === 'BooleanArray' : false;
  }
  function isByteArray(a) {
    return jsInstanceOf(a, Int8Array);
  }
  function isShortArray(a) {
    return jsInstanceOf(a, Int16Array);
  }
  function isCharArray(a) {
    return isJsArray(a) ? a.$type$ === 'CharArray' : false;
  }
  function isIntArray(a) {
    return jsInstanceOf(a, Int32Array);
  }
  function isFloatArray(a) {
    return jsInstanceOf(a, Float32Array);
  }
  function isLongArray(a) {
    return isJsArray(a) ? a.$type$ === 'LongArray' : false;
  }
  function isDoubleArray(a) {
    return jsInstanceOf(a, Float64Array);
  }
  function asList(_this_) {
    return new ArrayList(_this_);
  }
  function releaseIntercepted($this) {
    var intercepted_0 = $this._intercepted_;
    if (!(intercepted_0 == null) ? !(intercepted_0 === $this) : false) {
      ensureNotNull($this._get_context__8().get_31(Key_getInstance())).releaseInterceptedContinuation_9(intercepted_0);
    }$this._intercepted_ = CompletedContinuation_getInstance();
  }
  function CoroutineImpl_0(resultContinuation) {
    this._resultContinuation = resultContinuation;
    this._state_0 = 0;
    this._exceptionState = 0;
    this._result = null;
    this._exception_0 = null;
    this._finallyPath = null;
    var tmp = this;
    var tmp0_safe_receiver = this._resultContinuation;
    tmp.__context = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_context__8();
    this._intercepted_ = null;
  }
  CoroutineImpl_0.prototype._get_exception_ = function () {
    return this._exception_0;
  };
  CoroutineImpl_0.prototype._get_context__8 = function () {
    return ensureNotNull(this.__context);
  };
  CoroutineImpl_0.prototype.intercepted_0 = function () {
    var tmp2_elvis_lhs = this._intercepted_;
    var tmp;
    if (tmp2_elvis_lhs == null) {
      var tmp0_safe_receiver = this._get_context__8().get_31(Key_getInstance());
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.interceptContinuation_9(this);
      var tmp0_also_0 = tmp1_elvis_lhs == null ? this : tmp1_elvis_lhs;
      this._intercepted_ = tmp0_also_0;
      tmp = tmp0_also_0;
    } else {
      tmp = tmp2_elvis_lhs;
    }
    return tmp;
  };
  CoroutineImpl_0.prototype.resumeWith_9 = function (result) {
    var current = this;
    var tmp;
    if (_Result___get_isFailure__impl_(result)) {
      tmp = null;
    } else {
      var tmp_0 = _Result___get_value__impl_(result);
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    }
    var currentResult = tmp;
    var currentException = Result__exceptionOrNull_impl(result);
    while (true) {
      var tmp0_with_0 = current;
      if (currentException == null) {
        tmp0_with_0._result = currentResult;
      } else {
        tmp0_with_0._state_0 = tmp0_with_0._exceptionState;
        tmp0_with_0._exception_0 = currentException;
      }
      try {
        var outcome_2 = tmp0_with_0.doResume_1();
        if (outcome_2 === _get_COROUTINE_SUSPENDED_())
          return Unit_getInstance();
        currentResult = outcome_2;
        currentException = null;
      } catch ($p) {
        currentResult = null;
        currentException = $p;
      }
      releaseIntercepted(tmp0_with_0);
      var completion_4 = ensureNotNull(tmp0_with_0._resultContinuation);
      if (completion_4 instanceof CoroutineImpl_0) {
        current = completion_4;
      } else {
        {
          if (!(currentException == null)) {
            var tmp0_resumeWithException_0_5 = ensureNotNull(currentException);
            var tmp0_failure_0_1_6 = Companion_getInstance_2();
            completion_4.resumeWith_8(_Result___init__impl_(createFailure(tmp0_resumeWithException_0_5)));
          } else {
            var tmp1_resume_0_7 = currentResult;
            var tmp0_success_0_1_8 = Companion_getInstance_2();
            completion_4.resumeWith_8(_Result___init__impl_(tmp1_resume_0_7));
          }
          return Unit_getInstance();
        }
      }
    }
  };
  CoroutineImpl_0.prototype.resumeWith_8 = function (result) {
    return this.resumeWith_9(result);
  };
  CoroutineImpl_0.$metadata$ = {
    simpleName: 'CoroutineImpl',
    kind: 'class',
    interfaces: [Continuation]
  };
  function CompletedContinuation() {
    CompletedContinuation_instance = this;
  }
  CompletedContinuation.prototype._get_context__8 = function () {
    var tmp0_error_0 = 'This continuation is already complete';
    throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
  };
  CompletedContinuation.prototype.resumeWith_9 = function (result) {
    var tmp0_error_0 = 'This continuation is already complete';
    throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
  };
  CompletedContinuation.prototype.resumeWith_8 = function (result) {
    return this.resumeWith_9(result);
  };
  CompletedContinuation.prototype.toString = function () {
    return 'This continuation is already complete';
  };
  CompletedContinuation.$metadata$ = {
    simpleName: 'CompletedContinuation',
    kind: 'object',
    interfaces: [Continuation]
  };
  var CompletedContinuation_instance;
  function CompletedContinuation_getInstance() {
    if (CompletedContinuation_instance == null)
      new CompletedContinuation();
    return CompletedContinuation_instance;
  }
  function intercepted(_this_) {
    var tmp0_safe_receiver = _this_ instanceof CoroutineImpl_0 ? _this_ : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.intercepted_0();
    return tmp1_elvis_lhs == null ? _this_ : tmp1_elvis_lhs;
  }
  function createCoroutineUnintercepted(_this_, receiver, completion) {
    return new _no_name_provided__1_0(_this_, receiver, completion);
  }
  function _no_name_provided__1_0($this_createCoroutineUnintercepted, $receiver, $completion) {
    this._$this_createCoroutineUnintercepted = $this_createCoroutineUnintercepted;
    this._$receiver = $receiver;
    this._$completion = $completion;
    CoroutineImpl_0.call(this, isInterface($completion, Continuation) ? $completion : THROW_CCE());
  }
  _no_name_provided__1_0.prototype.doResume_2 = function () {
    if (this._get_exception_() != null)
      throw this._get_exception_();
    return this._$this_createCoroutineUnintercepted(this._$receiver, this._$completion);
  };
  _no_name_provided__1_0.prototype.doResume_1 = function () {
    return this.doResume_2();
  };
  _no_name_provided__1_0.$metadata$ = {
    simpleName: '<no name provided>_1',
    kind: 'class',
    interfaces: []
  };
  function Exception_init_$Init$($this) {
    extendThrowable($this, void 1, void 1);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Init$_0(message, $this) {
    extendThrowable($this, message, void 1);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Create$(message) {
    var tmp = Exception_init_$Init$_0(message, Object.create(Exception.prototype));
    captureStack(tmp, Exception_init_$Create$);
    return tmp;
  }
  function Exception_init_$Init$_1(message, cause, $this) {
    extendThrowable($this, message, cause);
    Exception.call($this);
    return $this;
  }
  function Exception() {
    captureStack(this, Exception);
  }
  Exception.$metadata$ = {
    simpleName: 'Exception',
    kind: 'class',
    interfaces: []
  };
  function Error_init_$Init$(message, cause, $this) {
    extendThrowable($this, message, cause);
    Error_0.call($this);
    return $this;
  }
  function Error_0() {
    captureStack(this, Error_0);
  }
  Error_0.$metadata$ = {
    simpleName: 'Error',
    kind: 'class',
    interfaces: []
  };
  function IllegalArgumentException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IllegalArgumentException.call($this);
    return $this;
  }
  function IllegalArgumentException_init_$Create$(message) {
    var tmp = IllegalArgumentException_init_$Init$(message, Object.create(IllegalArgumentException.prototype));
    captureStack(tmp, IllegalArgumentException_init_$Create$);
    return tmp;
  }
  function IllegalArgumentException() {
    captureStack(this, IllegalArgumentException);
  }
  IllegalArgumentException.$metadata$ = {
    simpleName: 'IllegalArgumentException',
    kind: 'class',
    interfaces: []
  };
  function RuntimeException_init_$Init$($this) {
    Exception_init_$Init$($this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Init$_0(message, $this) {
    Exception_init_$Init$_0(message, $this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Init$_1(message, cause, $this) {
    Exception_init_$Init$_1(message, cause, $this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Create$(message, cause) {
    var tmp = RuntimeException_init_$Init$_1(message, cause, Object.create(RuntimeException.prototype));
    captureStack(tmp, RuntimeException_init_$Create$);
    return tmp;
  }
  function RuntimeException() {
    captureStack(this, RuntimeException);
  }
  RuntimeException.$metadata$ = {
    simpleName: 'RuntimeException',
    kind: 'class',
    interfaces: []
  };
  function NoSuchElementException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NoSuchElementException.call($this);
    return $this;
  }
  function NoSuchElementException_init_$Create$() {
    var tmp = NoSuchElementException_init_$Init$(Object.create(NoSuchElementException.prototype));
    captureStack(tmp, NoSuchElementException_init_$Create$);
    return tmp;
  }
  function NoSuchElementException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    NoSuchElementException.call($this);
    return $this;
  }
  function NoSuchElementException_init_$Create$_0(message) {
    var tmp = NoSuchElementException_init_$Init$_0(message, Object.create(NoSuchElementException.prototype));
    captureStack(tmp, NoSuchElementException_init_$Create$_0);
    return tmp;
  }
  function NoSuchElementException() {
    captureStack(this, NoSuchElementException);
  }
  NoSuchElementException.$metadata$ = {
    simpleName: 'NoSuchElementException',
    kind: 'class',
    interfaces: []
  };
  function IllegalStateException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IllegalStateException.call($this);
    return $this;
  }
  function IllegalStateException_init_$Create$(message) {
    var tmp = IllegalStateException_init_$Init$(message, Object.create(IllegalStateException.prototype));
    captureStack(tmp, IllegalStateException_init_$Create$);
    return tmp;
  }
  function IllegalStateException_init_$Init$_0(message, cause, $this) {
    RuntimeException_init_$Init$_1(message, cause, $this);
    IllegalStateException.call($this);
    return $this;
  }
  function IllegalStateException_init_$Create$_0(message, cause) {
    var tmp = IllegalStateException_init_$Init$_0(message, cause, Object.create(IllegalStateException.prototype));
    captureStack(tmp, IllegalStateException_init_$Create$_0);
    return tmp;
  }
  function IllegalStateException() {
    captureStack(this, IllegalStateException);
  }
  IllegalStateException.$metadata$ = {
    simpleName: 'IllegalStateException',
    kind: 'class',
    interfaces: []
  };
  function UnsupportedOperationException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$() {
    var tmp = UnsupportedOperationException_init_$Init$(Object.create(UnsupportedOperationException.prototype));
    captureStack(tmp, UnsupportedOperationException_init_$Create$);
    return tmp;
  }
  function UnsupportedOperationException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$_0(message) {
    var tmp = UnsupportedOperationException_init_$Init$_0(message, Object.create(UnsupportedOperationException.prototype));
    captureStack(tmp, UnsupportedOperationException_init_$Create$_0);
    return tmp;
  }
  function UnsupportedOperationException() {
    captureStack(this, UnsupportedOperationException);
  }
  UnsupportedOperationException.$metadata$ = {
    simpleName: 'UnsupportedOperationException',
    kind: 'class',
    interfaces: []
  };
  function IndexOutOfBoundsException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IndexOutOfBoundsException.call($this);
    return $this;
  }
  function IndexOutOfBoundsException_init_$Create$(message) {
    var tmp = IndexOutOfBoundsException_init_$Init$(message, Object.create(IndexOutOfBoundsException.prototype));
    captureStack(tmp, IndexOutOfBoundsException_init_$Create$);
    return tmp;
  }
  function IndexOutOfBoundsException() {
    captureStack(this, IndexOutOfBoundsException);
  }
  IndexOutOfBoundsException.$metadata$ = {
    simpleName: 'IndexOutOfBoundsException',
    kind: 'class',
    interfaces: []
  };
  function ArithmeticException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    ArithmeticException.call($this);
    return $this;
  }
  function ArithmeticException_init_$Create$(message) {
    var tmp = ArithmeticException_init_$Init$(message, Object.create(ArithmeticException.prototype));
    captureStack(tmp, ArithmeticException_init_$Create$);
    return tmp;
  }
  function ArithmeticException() {
    captureStack(this, ArithmeticException);
  }
  ArithmeticException.$metadata$ = {
    simpleName: 'ArithmeticException',
    kind: 'class',
    interfaces: []
  };
  function NullPointerException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NullPointerException.call($this);
    return $this;
  }
  function NullPointerException_init_$Create$() {
    var tmp = NullPointerException_init_$Init$(Object.create(NullPointerException.prototype));
    captureStack(tmp, NullPointerException_init_$Create$);
    return tmp;
  }
  function NullPointerException() {
    captureStack(this, NullPointerException);
  }
  NullPointerException.$metadata$ = {
    simpleName: 'NullPointerException',
    kind: 'class',
    interfaces: []
  };
  function NoWhenBranchMatchedException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NoWhenBranchMatchedException.call($this);
    return $this;
  }
  function NoWhenBranchMatchedException_init_$Create$() {
    var tmp = NoWhenBranchMatchedException_init_$Init$(Object.create(NoWhenBranchMatchedException.prototype));
    captureStack(tmp, NoWhenBranchMatchedException_init_$Create$);
    return tmp;
  }
  function NoWhenBranchMatchedException() {
    captureStack(this, NoWhenBranchMatchedException);
  }
  NoWhenBranchMatchedException.$metadata$ = {
    simpleName: 'NoWhenBranchMatchedException',
    kind: 'class',
    interfaces: []
  };
  function ClassCastException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    ClassCastException.call($this);
    return $this;
  }
  function ClassCastException_init_$Create$() {
    var tmp = ClassCastException_init_$Init$(Object.create(ClassCastException.prototype));
    captureStack(tmp, ClassCastException_init_$Create$);
    return tmp;
  }
  function ClassCastException() {
    captureStack(this, ClassCastException);
  }
  ClassCastException.$metadata$ = {
    simpleName: 'ClassCastException',
    kind: 'class',
    interfaces: []
  };
  function UninitializedPropertyAccessException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    UninitializedPropertyAccessException.call($this);
    return $this;
  }
  function UninitializedPropertyAccessException_init_$Create$(message) {
    var tmp = UninitializedPropertyAccessException_init_$Init$(message, Object.create(UninitializedPropertyAccessException.prototype));
    captureStack(tmp, UninitializedPropertyAccessException_init_$Create$);
    return tmp;
  }
  function UninitializedPropertyAccessException() {
    captureStack(this, UninitializedPropertyAccessException);
  }
  UninitializedPropertyAccessException.$metadata$ = {
    simpleName: 'UninitializedPropertyAccessException',
    kind: 'class',
    interfaces: []
  };
  function jsIn(lhs_hack, rhs_hack) {
    var tmp0_unsafeCast_0 = lhs_hack in rhs_hack;
    return tmp0_unsafeCast_0;
  }
  function jsBitwiseOr(lhs_hack, rhs_hack) {
    var tmp0_unsafeCast_0 = lhs_hack | rhs_hack;
    return tmp0_unsafeCast_0;
  }
  function jsTypeOf(value_hack) {
    var tmp0_unsafeCast_0 = typeof value_hack;
    return tmp0_unsafeCast_0;
  }
  function jsDeleteProperty(obj_hack, property_hack) {
    delete obj_hack[property_hack];
  }
  function jsInstanceOf(obj_hack, jsClass_hack) {
    var tmp0_unsafeCast_0 = obj_hack instanceof jsClass_hack;
    return tmp0_unsafeCast_0;
  }
  function jsBitwiseAnd(lhs_hack, rhs_hack) {
    var tmp0_unsafeCast_0 = lhs_hack & rhs_hack;
    return tmp0_unsafeCast_0;
  }
  function None() {
    None_instance = this;
    TraceBase.call(this);
  }
  None.$metadata$ = {
    simpleName: 'None',
    kind: 'object',
    interfaces: []
  };
  var None_instance;
  function None_getInstance() {
    if (None_instance == null)
      new None();
    return None_instance;
  }
  function TraceBase() {
  }
  TraceBase.prototype.atomicfu$Trace$append$1 = function (event) {
  };
  TraceBase.prototype.atomicfu$Trace$append$2 = function (event1, event2) {
  };
  TraceBase.prototype.atomicfu$Trace$append$3 = function (event1, event2, event3) {
  };
  TraceBase.prototype.atomicfu$Trace$append$4 = function (event1, event2, event3, event4) {
  };
  TraceBase.$metadata$ = {
    simpleName: 'TraceBase',
    kind: 'class',
    interfaces: []
  };
  function AtomicRef(value) {
    this._value_0 = value;
  }
  AtomicRef.prototype._set_value_ = function (_set___) {
    this._value_0 = _set___;
  };
  AtomicRef.prototype._get_value__4 = function () {
    return this._value_0;
  };
  AtomicRef.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this._value_0 === expect))
      return false;
    this._value_0 = update;
    return true;
  };
  AtomicRef.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this._value_0;
    this._value_0 = value;
    return oldValue;
  };
  AtomicRef.prototype.toString = function () {
    return toString_0(this._value_0);
  };
  AtomicRef.$metadata$ = {
    simpleName: 'AtomicRef',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(AtomicRef.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicRef.prototype._get_value__4,
    set: AtomicRef.prototype._set_value_
  });
  function atomic(initial) {
    return atomic_2(initial, None_getInstance());
  }
  function AtomicBoolean(value) {
    this._value_1 = value;
  }
  AtomicBoolean.prototype._set_value__0 = function (_set___) {
    this._value_1 = _set___;
  };
  AtomicBoolean.prototype._get_value__4 = function () {
    return this._value_1;
  };
  AtomicBoolean.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this._value_1 === expect))
      return false;
    this._value_1 = update;
    return true;
  };
  AtomicBoolean.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this._value_1;
    this._value_1 = value;
    return oldValue;
  };
  AtomicBoolean.prototype.toString = function () {
    return this._value_1.toString();
  };
  AtomicBoolean.$metadata$ = {
    simpleName: 'AtomicBoolean',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(AtomicBoolean.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicBoolean.prototype._get_value__4,
    set: AtomicBoolean.prototype._set_value__0
  });
  function atomic_0(initial) {
    return atomic_3(initial, None_getInstance());
  }
  function AtomicInt(value) {
    this._value_2 = value;
  }
  AtomicInt.prototype._set_value__1 = function (_set___) {
    this._value_2 = _set___;
  };
  AtomicInt.prototype._get_value__4 = function () {
    return this._value_2;
  };
  AtomicInt.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this._value_2 === expect))
      return false;
    this._value_2 = update;
    return true;
  };
  AtomicInt.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this._value_2;
    this._value_2 = value;
    return oldValue;
  };
  AtomicInt.prototype.atomicfu$getAndIncrement = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this._value_2;
    tmp0_this._value_2 = tmp1 + 1 | 0;
    return tmp1;
  };
  AtomicInt.prototype.atomicfu$getAndDecrement = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this._value_2;
    tmp0_this._value_2 = tmp1 - 1 | 0;
    return tmp1;
  };
  AtomicInt.prototype.atomicfu$getAndAdd = function (delta_0) {
    var oldValue = this._value_2;
    var tmp0_this = this;
    tmp0_this._value_2 = tmp0_this._value_2 + delta_0 | 0;
    return oldValue;
  };
  AtomicInt.prototype.atomicfu$addAndGet = function (delta_0) {
    var tmp0_this = this;
    tmp0_this._value_2 = tmp0_this._value_2 + delta_0 | 0;
    return this._value_2;
  };
  AtomicInt.prototype.atomicfu$incrementAndGet = function () {
    var tmp0_this = this;
    tmp0_this._value_2 = tmp0_this._value_2 + 1 | 0;
    return tmp0_this._value_2;
  };
  AtomicInt.prototype.atomicfu$decrementAndGet = function () {
    var tmp0_this = this;
    tmp0_this._value_2 = tmp0_this._value_2 - 1 | 0;
    return tmp0_this._value_2;
  };
  AtomicInt.prototype.toString = function () {
    return this._value_2.toString();
  };
  AtomicInt.$metadata$ = {
    simpleName: 'AtomicInt',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(AtomicInt.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicInt.prototype._get_value__4,
    set: AtomicInt.prototype._set_value__1
  });
  function atomic_1(initial) {
    return atomic_4(initial, None_getInstance());
  }
  function atomic_2(initial, trace) {
    return new AtomicRef(initial);
  }
  function atomic_3(initial, trace) {
    return new AtomicBoolean(initial);
  }
  function atomic_4(initial, trace) {
    return new AtomicInt(initial);
  }
  function AbstractCoroutine(parentContext, active) {
    JobSupport.call(this, active);
    this._parentContext = parentContext;
    this._context = this._parentContext.plus_17(this);
  }
  AbstractCoroutine.prototype._get_context__8 = function () {
    return this._context;
  };
  AbstractCoroutine.prototype._get_coroutineContext__3 = function () {
    return this._context;
  };
  AbstractCoroutine.prototype._get_isActive__15 = function () {
    return JobSupport.prototype._get_isActive__15.call(this);
  };
  AbstractCoroutine.prototype.initParentJob_1 = function () {
    this.initParentJobInternal_2(this._parentContext.get_31(Key_getInstance_2()));
  };
  AbstractCoroutine.prototype.onStart_1 = function () {
  };
  AbstractCoroutine.prototype.onStartInternal_2 = function () {
    this.onStart_1();
  };
  AbstractCoroutine.prototype.onCompleted = function (value) {
  };
  AbstractCoroutine.prototype.onCancelled_1 = function (cause, handled) {
  };
  AbstractCoroutine.prototype.cancellationExceptionMessage_2 = function () {
    return '' + _get_classSimpleName_(this) + ' was cancelled';
  };
  AbstractCoroutine.prototype.onCompletionInternal_2 = function (state) {
    if (state instanceof CompletedExceptionally)
      this.onCancelled_1(state._cause, state._get_handled__0());
    else {
      {
        this.onCompleted((state == null ? true : isObject(state)) ? state : THROW_CCE());
      }
    }
  };
  AbstractCoroutine.prototype.resumeWith_8 = function (result) {
    var state = this.makeCompletingOnce_2(toState$default(result, null, 1, null));
    if (state === COMPLETING_WAITING_CHILDREN)
      return Unit_getInstance();
    this.afterResume_1(state);
  };
  AbstractCoroutine.prototype.afterResume_1 = function (state) {
    return this.afterCompletion_2(state);
  };
  AbstractCoroutine.prototype.handleOnCompletionException_2 = function (exception) {
    handleCoroutineException(this._context, exception);
  };
  AbstractCoroutine.prototype.nameString_3 = function () {
    var tmp0_elvis_lhs = _get_coroutineName_(this._context);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return JobSupport.prototype.nameString_3.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '' + '"' + coroutineName + '":' + JobSupport.prototype.nameString_3.call(this);
  };
  AbstractCoroutine.prototype.start_0 = function (start, receiver, block) {
    this.initParentJob_1();
    start.invoke_61(block, receiver, this);
  };
  AbstractCoroutine.$metadata$ = {
    simpleName: 'AbstractCoroutine',
    kind: 'class',
    interfaces: [Job, Continuation, CoroutineScope]
  };
  function launch(_this_, context, start, block) {
    var newContext = newCoroutineContext(_this_, context);
    var coroutine = start._get_isLazy_() ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.start_0(start, coroutine, block);
    return coroutine;
  }
  function launch$default(_this_, context, start, block, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      context = EmptyCoroutineContext_getInstance();
    if (!(($mask0 & 2) === 0))
      start = CoroutineStart_DEFAULT_getInstance();
    return launch(_this_, context, start, block);
  }
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, active);
  }
  StandaloneCoroutine.prototype.handleJobException_2 = function (exception) {
    handleCoroutineException(this._get_context__8(), exception);
    return true;
  };
  StandaloneCoroutine.$metadata$ = {
    simpleName: 'StandaloneCoroutine',
    kind: 'class',
    interfaces: []
  };
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this._continuation = createCoroutineUnintercepted(block, this, this);
  }
  LazyStandaloneCoroutine.prototype.onStart_1 = function () {
    startCoroutineCancellable_0(this._continuation, this);
  };
  LazyStandaloneCoroutine.$metadata$ = {
    simpleName: 'LazyStandaloneCoroutine',
    kind: 'class',
    interfaces: []
  };
  function CancellableContinuation() {
  }
  CancellableContinuation.$metadata$ = {
    simpleName: 'CancellableContinuation',
    kind: 'interface',
    interfaces: [Continuation]
  };
  function _set_parentHandle_($this, value) {
    $this.__parentHandle._value_0 = value;
  }
  function _get_parentHandle_($this) {
    return $this.__parentHandle._value_0;
  }
  function _get_stateDebugRepresentation_($this) {
    var tmp0_subject = $this._get_state__3();
    var tmp;
    if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
      tmp = 'Active';
    } else {
      if (tmp0_subject instanceof CancelledContinuation) {
        tmp = 'Cancelled';
      } else {
        {
          tmp = 'Completed';
        }
      }
    }
    return tmp;
  }
  function isReusable($this) {
    var tmp;
    var tmp_0 = $this._delegate;
    if (tmp_0 instanceof DispatchedContinuation) {
      tmp = $this._delegate.isReusable($this);
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  }
  function setupCancellation($this) {
    if (checkCompleted($this))
      return Unit_getInstance();
    if (!(_get_parentHandle_($this) === null))
      return Unit_getInstance();
    var tmp0_elvis_lhs = $this._delegate._get_context__8().get_31(Key_getInstance_2());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var tmp0__get_asHandler__0 = new ChildContinuation($this);
    var handle = parent.invokeOnCompletion$default_3(true, false, tmp0__get_asHandler__0, 2, null);
    _set_parentHandle_($this, handle);
    if ($this._get_isCompleted__3() ? !isReusable($this) : false) {
      handle.dispose_9();
      _set_parentHandle_($this, NonDisposableHandle_getInstance());
    }}
  function checkCompleted($this) {
    var completed = $this._get_isCompleted__3();
    if (!_get_isReusableMode_($this._get_resumeMode__0()))
      return completed;
    var tmp = $this._delegate;
    var tmp0_elvis_lhs = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return completed;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var dispatched = tmp_0;
    var tmp1_elvis_lhs = dispatched.checkPostponedCancellation($this);
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      return completed;
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    var cause = tmp_1;
    if (!completed) {
      $this.cancel(cause);
      Unit_getInstance();
    }return true;
  }
  function cancelLater($this, cause) {
    if (!_get_isReusableMode_($this._get_resumeMode__0()))
      return false;
    var tmp = $this._delegate;
    var tmp0_elvis_lhs = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var dispatched = tmp_0;
    return dispatched.postponeCancellation(cause);
  }
  function callCancelHandler($this, handler, cause) {
    var tmp;
    try {
      tmp = invokeIt(handler, cause);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        tmp_0 = handleCoroutineException($this._get_context__8(), new CompletionHandlerException('' + 'Exception in invokeOnCancellation handler for ' + $this, $p));
      } else {
        {
          throw $p;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function trySuspend($this) {
    var tmp0_loop_0 = $this.__decision;
    while (true) {
      var tmp1__anonymous__1 = tmp0_loop_0._value_2;
      var tmp0_subject_2 = tmp1__anonymous__1;
      switch (tmp0_subject_2) {
        case 0:
          if ($this.__decision.atomicfu$compareAndSet(0, 1))
            return true;
          break;
        case 2:
          return false;
        default:var tmp0_error_0_3 = 'Already suspended';
          throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0_3));
      }
    }
    Unit_getInstance();
  }
  function tryResume($this) {
    var tmp0_loop_0 = $this.__decision;
    while (true) {
      var tmp1__anonymous__1 = tmp0_loop_0._value_2;
      var tmp0_subject_2 = tmp1__anonymous__1;
      switch (tmp0_subject_2) {
        case 0:
          if ($this.__decision.atomicfu$compareAndSet(0, 2))
            return true;
          break;
        case 1:
          return false;
        default:var tmp0_error_0_3 = 'Already resumed';
          throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0_3));
      }
    }
    Unit_getInstance();
  }
  function multipleHandlersError($this, handler, state) {
    var tmp0_error_0 = '' + "It's prohibited to register multiple handlers, tried to register " + handler + ', already has ' + state;
    throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
  }
  function makeCancelHandler($this, handler) {
    var tmp;
    if (handler instanceof CancelHandler) {
      tmp = handler;
    } else {
      {
        tmp = new InvokeOnCancel(handler);
      }
    }
    return tmp;
  }
  function dispatchResume($this, mode) {
    if (tryResume($this))
      return Unit_getInstance();
    dispatch($this, mode);
  }
  function resumedState($this, state, proposedUpdate, resumeMode, onCancellation, idempotent) {
    var tmp;
    if (proposedUpdate instanceof CompletedExceptionally) {
      tmp = proposedUpdate;
    } else {
      if (!_get_isCancellableMode_(resumeMode) ? idempotent == null : false) {
        tmp = proposedUpdate;
      } else {
        var tmp_0;
        var tmp_1;
        if (!(onCancellation == null)) {
          tmp_1 = true;
        } else {
          var tmp_2;
          if (state instanceof CancelHandler) {
            tmp_2 = !(state instanceof BeforeResumeCancelHandler);
          } else {
            {
              tmp_2 = false;
            }
          }
          tmp_1 = tmp_2;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          {
            tmp_0 = !(idempotent == null);
          }
        }
        if (tmp_0) {
          var tmp_3 = state instanceof CancelHandler ? state : null;
          tmp = CompletedContinuation_init_$Create$(proposedUpdate, tmp_3, onCancellation, idempotent, null, 16, null);
        } else {
          {
            tmp = proposedUpdate;
          }
        }
      }
    }
    return tmp;
  }
  function resumeImpl($this, proposedUpdate, resumeMode, onCancellation) {
    var tmp0_loop_0 = $this.__state;
    while (true) {
      var tmp$ret$0;
      l$ret$1: do {
        var tmp1__anonymous__1 = tmp0_loop_0._value_0;
        var tmp0_subject_2 = tmp1__anonymous__1;
        if (!(tmp0_subject_2 == null) ? isInterface(tmp0_subject_2, NotCompleted) : false) {
          var update_3 = resumedState($this, tmp1__anonymous__1, proposedUpdate, resumeMode, onCancellation, null);
          if (!$this.__state.atomicfu$compareAndSet(tmp1__anonymous__1, update_3)) {
            tmp$ret$0 = Unit_getInstance();
            break l$ret$1;
          }detachChildIfNonResuable($this);
          dispatchResume($this, resumeMode);
          return Unit_getInstance();
        } else {
          if (tmp0_subject_2 instanceof CancelledContinuation) {
            if (tmp1__anonymous__1.makeResumed()) {
              var tmp1_safe_receiver_4 = onCancellation;
              if (tmp1_safe_receiver_4 == null)
                null;
              else {
                $this.callOnCancellation(tmp1_safe_receiver_4, tmp1__anonymous__1._get_cause__17());
                Unit_getInstance();
              }
              Unit_getInstance();
              return Unit_getInstance();
            }} else {
          }
        }
        alreadyResumedError($this, proposedUpdate);
      }
       while (false);
    }
    Unit_getInstance();
  }
  function resumeImpl$default($this, proposedUpdate, resumeMode, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      onCancellation = null;
    return resumeImpl($this, proposedUpdate, resumeMode, onCancellation);
  }
  function alreadyResumedError($this, proposedUpdate) {
    var tmp0_error_0 = '' + 'Already resumed, but proposed with update ' + proposedUpdate;
    throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
  }
  function detachChildIfNonResuable($this) {
    if (!isReusable($this))
      $this.detachChild();
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this._delegate = delegate;
    this._context_0 = this._delegate._get_context__8();
    this.__decision = atomic_1(0);
    this.__state = atomic(Active_getInstance());
    this.__parentHandle = atomic(null);
  }
  CancellableContinuationImpl.prototype._get_delegate__1 = function () {
    return this._delegate;
  };
  CancellableContinuationImpl.prototype._get_context__8 = function () {
    return this._context_0;
  };
  CancellableContinuationImpl.prototype._get_state__3 = function () {
    return this.__state._value_0;
  };
  CancellableContinuationImpl.prototype._get_isCompleted__3 = function () {
    var tmp = this._get_state__3();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  CancellableContinuationImpl.prototype.initCancellability = function () {
    setupCancellation(this);
  };
  CancellableContinuationImpl.prototype.takeState_1 = function () {
    return this._get_state__3();
  };
  CancellableContinuationImpl.prototype.cancelCompletedResult_1 = function (takenState, cause) {
    var tmp0_loop_0 = this.__state;
    while (true) {
      var tmp1__anonymous__1 = tmp0_loop_0._value_0;
      var tmp0_subject_2 = tmp1__anonymous__1;
      if (!(tmp0_subject_2 == null) ? isInterface(tmp0_subject_2, NotCompleted) : false) {
        var tmp0_error_0_3 = 'Not completed';
        throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0_3));
      } else {
        if (tmp0_subject_2 instanceof CompletedExceptionally)
          return Unit_getInstance();
        else {
          if (tmp0_subject_2 instanceof CompletedContinuation_0) {
            var tmp1_check_0_4 = !tmp1__anonymous__1._get_cancelled_();
            if (!tmp1_check_0_4) {
              var message_1_5 = 'Must be called at most once';
              throw IllegalStateException_init_$Create$(toString_1(message_1_5));
            }var tmp = tmp1__anonymous__1;
            var update_6 = tmp.copy$default(null, null, null, null, cause, 15, null);
            if (this.__state.atomicfu$compareAndSet(tmp1__anonymous__1, update_6)) {
              tmp1__anonymous__1.invokeHandlers(this, cause);
              return Unit_getInstance();
            }} else {
            {
              if (this.__state.atomicfu$compareAndSet(tmp1__anonymous__1, CompletedContinuation_init_$Create$(tmp1__anonymous__1, null, null, null, cause, 14, null))) {
                return Unit_getInstance();
              } else {
              }
            }
          }
        }
      }
    }
    Unit_getInstance();
  };
  CancellableContinuationImpl.prototype.cancel = function (cause) {
    var tmp0_loop_0 = this.__state;
    while (true) {
      var tmp$ret$0;
      l$ret$1: do {
        var tmp1__anonymous__1 = tmp0_loop_0._value_0;
        if (!(!(tmp1__anonymous__1 == null) ? isInterface(tmp1__anonymous__1, NotCompleted) : false))
          return false;
        else {
        }
        var update_2 = new CancelledContinuation(this, cause, tmp1__anonymous__1 instanceof CancelHandler);
        if (!this.__state.atomicfu$compareAndSet(tmp1__anonymous__1, update_2)) {
          tmp$ret$0 = Unit_getInstance();
          break l$ret$1;
        }var tmp0_safe_receiver_3 = tmp1__anonymous__1 instanceof CancelHandler ? tmp1__anonymous__1 : null;
        if (tmp0_safe_receiver_3 == null)
          null;
        else {
          this.callCancelHandler(tmp0_safe_receiver_3, cause);
          Unit_getInstance();
        }
        Unit_getInstance();
        detachChildIfNonResuable(this);
        dispatchResume(this, this._get_resumeMode__0());
        return true;
      }
       while (false);
    }
    Unit_getInstance();
  };
  CancellableContinuationImpl.prototype.parentCancelled_2 = function (cause) {
    if (cancelLater(this, cause))
      return Unit_getInstance();
    this.cancel(cause);
    Unit_getInstance();
    detachChildIfNonResuable(this);
  };
  CancellableContinuationImpl.prototype.callCancelHandler = function (handler, cause) {
    var tmp;
    try {
      tmp = handler.invoke(cause);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        tmp_0 = handleCoroutineException(this._get_context__8(), new CompletionHandlerException('' + 'Exception in invokeOnCancellation handler for ' + this, $p));
      } else {
        {
          throw $p;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.callOnCancellation = function (onCancellation, cause) {
    try {
      onCancellation(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        handleCoroutineException(this._get_context__8(), new CompletionHandlerException('' + 'Exception in resume onCancellation handler for ' + this, $p));
      } else {
        {
          throw $p;
        }
      }
    }
  };
  CancellableContinuationImpl.prototype.getContinuationCancellationCause = function (parent) {
    return parent.getCancellationException_3();
  };
  CancellableContinuationImpl.prototype.getResult = function () {
    setupCancellation(this);
    if (trySuspend(this))
      return _get_COROUTINE_SUSPENDED_();
    var state = this._get_state__3();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state._cause, this);
    else {
    }
    if (_get_isCancellableMode_(this._get_resumeMode__0())) {
      var job = this._get_context__8().get_31(Key_getInstance_2());
      if (!(job == null) ? !job._get_isActive__15() : false) {
        var cause = job.getCancellationException_3();
        this.cancelCompletedResult_1(state, cause);
        throw recoverStackTrace(cause, this);
      }}return this.getSuccessfulResult_1(state);
  };
  CancellableContinuationImpl.prototype.resumeWith_8 = function (result) {
    var tmp = toState(result, this);
    var tmp_0 = this._get_resumeMode__0();
    return resumeImpl$default(this, tmp, tmp_0, null, 8, null);
  };
  CancellableContinuationImpl.prototype.invokeOnCancellation_0 = function (handler) {
    var cancelHandler = makeCancelHandler(this, handler);
    var tmp0_loop_0 = this.__state;
    while (true) {
      var tmp1__anonymous__1 = tmp0_loop_0._value_0;
      var tmp0_subject_2 = tmp1__anonymous__1;
      if (tmp0_subject_2 instanceof Active) {
        if (this.__state.atomicfu$compareAndSet(tmp1__anonymous__1, cancelHandler))
          return Unit_getInstance();
      } else {
        if (tmp0_subject_2 instanceof CancelHandler)
          multipleHandlersError(this, handler, tmp1__anonymous__1);
        else {
          if (tmp0_subject_2 instanceof CompletedExceptionally) {
            if (!tmp1__anonymous__1.makeHandled_0())
              multipleHandlersError(this, handler, tmp1__anonymous__1);
            if (tmp1__anonymous__1 instanceof CancelledContinuation) {
              var tmp1_safe_receiver_3 = tmp1__anonymous__1 instanceof CompletedExceptionally ? tmp1__anonymous__1 : null;
              callCancelHandler(this, handler, tmp1_safe_receiver_3 == null ? null : tmp1_safe_receiver_3._cause);
            } else {
            }
            return Unit_getInstance();
          } else {
            if (tmp0_subject_2 instanceof CompletedContinuation_0) {
              if (!(tmp1__anonymous__1._cancelHandler == null))
                multipleHandlersError(this, handler, tmp1__anonymous__1);
              if (cancelHandler instanceof BeforeResumeCancelHandler)
                return Unit_getInstance();
              else {
              }
              if (tmp1__anonymous__1._get_cancelled_()) {
                callCancelHandler(this, handler, tmp1__anonymous__1._cancelCause);
                return Unit_getInstance();
              }var tmp = tmp1__anonymous__1;
              var update_4 = tmp.copy$default(null, cancelHandler, null, null, null, 29, null);
              if (this.__state.atomicfu$compareAndSet(tmp1__anonymous__1, update_4))
                return Unit_getInstance();
            } else {
              {
                if (cancelHandler instanceof BeforeResumeCancelHandler)
                  return Unit_getInstance();
                else {
                }
                var update_5 = CompletedContinuation_init_$Create$(tmp1__anonymous__1, cancelHandler, null, null, null, 28, null);
                if (this.__state.atomicfu$compareAndSet(tmp1__anonymous__1, update_5))
                  return Unit_getInstance();
              }
            }
          }
        }
      }
    }
    Unit_getInstance();
  };
  CancellableContinuationImpl.prototype.detachChild = function () {
    var handle = _get_parentHandle_(this);
    var tmp0_safe_receiver = handle;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.dispose_9();
      Unit_getInstance();
    }
    Unit_getInstance();
    _set_parentHandle_(this, NonDisposableHandle_getInstance());
  };
  CancellableContinuationImpl.prototype.resumeUndispatched_0 = function (_this__0, value) {
    var tmp = this._delegate;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0;
    var tmp0_safe_receiver = dc;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver._dispatcher) === _this__0) {
      tmp_0 = 4;
    } else {
      {
        tmp_0 = this._get_resumeMode__0();
      }
    }
    var tmp_1 = tmp_0;
    resumeImpl$default(this, value, tmp_1, null, 8, null);
  };
  CancellableContinuationImpl.prototype.getSuccessfulResult_1 = function (state) {
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof CompletedContinuation_0) {
      var tmp_0 = state._result_0;
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      {
        tmp = (state == null ? true : isObject(state)) ? state : THROW_CCE();
      }
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.getExceptionalResult_1 = function (state) {
    var tmp0_safe_receiver = DispatchedTask.prototype.getExceptionalResult_1.call(this, state);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = recoverStackTrace(tmp0_safe_receiver, this._delegate);
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.toString = function () {
    return '' + this.nameString_3() + '(' + toDebugString(this._delegate) + '){' + _get_stateDebugRepresentation_(this) + '}@' + _get_hexAddress_(this);
  };
  CancellableContinuationImpl.prototype.nameString_3 = function () {
    return 'CancellableContinuation';
  };
  CancellableContinuationImpl.$metadata$ = {
    simpleName: 'CancellableContinuationImpl',
    kind: 'class',
    interfaces: [CancellableContinuation, CoroutineStackFrame]
  };
  function CancelHandler() {
    CancelHandlerBase.call(this);
  }
  CancelHandler.$metadata$ = {
    simpleName: 'CancelHandler',
    kind: 'class',
    interfaces: [NotCompleted]
  };
  function Active() {
    Active_instance = this;
  }
  Active.prototype.toString = function () {
    return 'Active';
  };
  Active.$metadata$ = {
    simpleName: 'Active',
    kind: 'object',
    interfaces: [NotCompleted]
  };
  var Active_instance;
  function Active_getInstance() {
    if (Active_instance == null)
      new Active();
    return Active_instance;
  }
  function NotCompleted() {
  }
  NotCompleted.$metadata$ = {
    simpleName: 'NotCompleted',
    kind: 'interface',
    interfaces: []
  };
  function CompletedContinuation_init_$Init$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      cancelHandler = null;
    if (!(($mask0 & 4) === 0))
      onCancellation = null;
    if (!(($mask0 & 8) === 0))
      idempotentResume = null;
    if (!(($mask0 & 16) === 0))
      cancelCause = null;
    CompletedContinuation_0.call($this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
    return $this;
  }
  function CompletedContinuation_init_$Create$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker) {
    return CompletedContinuation_init_$Init$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker, Object.create(CompletedContinuation_0.prototype));
  }
  function CompletedContinuation_0(result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    this._result_0 = result;
    this._cancelHandler = cancelHandler;
    this._onCancellation = onCancellation;
    this._idempotentResume = idempotentResume;
    this._cancelCause = cancelCause;
  }
  CompletedContinuation_0.prototype._get_cancelled_ = function () {
    return !(this._cancelCause == null);
  };
  CompletedContinuation_0.prototype.invokeHandlers = function (cont, cause) {
    var tmp0_safe_receiver = this._cancelHandler;
    if (tmp0_safe_receiver == null)
      null;
    else {
      cont.callCancelHandler(tmp0_safe_receiver, cause);
      Unit_getInstance();
    }
    Unit_getInstance();
    var tmp1_safe_receiver = this._onCancellation;
    if (tmp1_safe_receiver == null)
      null;
    else {
      cont.callOnCancellation(tmp1_safe_receiver, cause);
      Unit_getInstance();
    }
    Unit_getInstance();
  };
  CompletedContinuation_0.prototype.copy = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation_0(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  CompletedContinuation_0.prototype.copy$default = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      result = this._result_0;
    if (!(($mask0 & 2) === 0))
      cancelHandler = this._cancelHandler;
    if (!(($mask0 & 4) === 0))
      onCancellation = this._onCancellation;
    if (!(($mask0 & 8) === 0))
      idempotentResume = this._idempotentResume;
    if (!(($mask0 & 16) === 0))
      cancelCause = this._cancelCause;
    return this.copy(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  CompletedContinuation_0.prototype.toString = function () {
    return '' + 'CompletedContinuation(result=' + this._result_0 + ', cancelHandler=' + this._cancelHandler + ', onCancellation=' + this._onCancellation + ', idempotentResume=' + this._idempotentResume + ', cancelCause=' + this._cancelCause + ')';
  };
  CompletedContinuation_0.prototype.hashCode = function () {
    var result = this._result_0 == null ? 0 : hashCode(this._result_0);
    result = imul(result, 31) + (this._cancelHandler == null ? 0 : hashCode(this._cancelHandler)) | 0;
    result = imul(result, 31) + (this._onCancellation == null ? 0 : hashCode(this._onCancellation)) | 0;
    result = imul(result, 31) + (this._idempotentResume == null ? 0 : hashCode(this._idempotentResume)) | 0;
    result = imul(result, 31) + (this._cancelCause == null ? 0 : hashCode(this._cancelCause)) | 0;
    return result;
  };
  CompletedContinuation_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation_0))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof CompletedContinuation_0 ? other : THROW_CCE();
    if (!equals_0(this._result_0, tmp0_other_with_cast._result_0))
      return false;
    if (!equals_0(this._cancelHandler, tmp0_other_with_cast._cancelHandler))
      return false;
    if (!equals_0(this._onCancellation, tmp0_other_with_cast._onCancellation))
      return false;
    if (!equals_0(this._idempotentResume, tmp0_other_with_cast._idempotentResume))
      return false;
    if (!equals_0(this._cancelCause, tmp0_other_with_cast._cancelCause))
      return false;
    return true;
  };
  CompletedContinuation_0.$metadata$ = {
    simpleName: 'CompletedContinuation',
    kind: 'class',
    interfaces: []
  };
  function BeforeResumeCancelHandler() {
  }
  BeforeResumeCancelHandler.$metadata$ = {
    simpleName: 'BeforeResumeCancelHandler',
    kind: 'class',
    interfaces: []
  };
  function InvokeOnCancel(handler) {
    CancelHandler.call(this);
    this._handler = handler;
  }
  InvokeOnCancel.prototype.invoke_69 = function (cause) {
    this._handler(cause);
  };
  InvokeOnCancel.prototype.invoke = function (cause) {
    return this.invoke_69(cause);
  };
  InvokeOnCancel.prototype.toString = function () {
    return '' + 'InvokeOnCancel[' + _get_classSimpleName_(this._handler) + '@' + _get_hexAddress_(this) + ']';
  };
  InvokeOnCancel.$metadata$ = {
    simpleName: 'InvokeOnCancel',
    kind: 'class',
    interfaces: []
  };
  function CompletedExceptionally_init_$Init$(cause, handled, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      handled = false;
    CompletedExceptionally.call($this, cause, handled);
    return $this;
  }
  function CompletedExceptionally_init_$Create$(cause, handled, $mask0, $marker) {
    return CompletedExceptionally_init_$Init$(cause, handled, $mask0, $marker, Object.create(CompletedExceptionally.prototype));
  }
  function CompletedExceptionally(cause, handled) {
    this._cause = cause;
    this.__handled = atomic_0(handled);
  }
  CompletedExceptionally.prototype._get_cause__17 = function () {
    return this._cause;
  };
  CompletedExceptionally.prototype._get_handled__0 = function () {
    return this.__handled._value_1;
  };
  CompletedExceptionally.prototype.makeHandled_0 = function () {
    return this.__handled.atomicfu$compareAndSet(false, true);
  };
  CompletedExceptionally.prototype.toString = function () {
    return '' + _get_classSimpleName_(this) + '[' + this._cause + ']';
  };
  CompletedExceptionally.$metadata$ = {
    simpleName: 'CompletedExceptionally',
    kind: 'class',
    interfaces: []
  };
  function CancelledContinuation(continuation, cause, handled) {
    var tmp0_elvis_lhs = cause;
    CompletedExceptionally.call(this, tmp0_elvis_lhs == null ? CancellationException_init_$Create$('' + 'Continuation ' + continuation + ' was cancelled normally') : tmp0_elvis_lhs, handled);
    this.__resumed = atomic_0(false);
  }
  CancelledContinuation.prototype.makeResumed = function () {
    return this.__resumed.atomicfu$compareAndSet(false, true);
  };
  CancelledContinuation.$metadata$ = {
    simpleName: 'CancelledContinuation',
    kind: 'class',
    interfaces: []
  };
  function toState(_this_, caller) {
    var exception_1 = Result__exceptionOrNull_impl(_this_);
    var tmp;
    if (exception_1 == null) {
      var tmp_0 = _Result___get_value__impl_(_this_);
      var tmp0__anonymous__2 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      tmp = tmp0__anonymous__2;
    } else {
      var tmp_1 = recoverStackTrace(exception_1, caller);
      tmp = CompletedExceptionally_init_$Create$(tmp_1, false, 2, null);
    }
    return tmp;
  }
  function toState_0(_this_, onCancellation) {
    var exception_1 = Result__exceptionOrNull_impl(_this_);
    var tmp;
    if (exception_1 == null) {
      var tmp_0 = _Result___get_value__impl_(_this_);
      var tmp0__anonymous__2 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      tmp = !(onCancellation == null) ? new CompletedWithCancellation(tmp0__anonymous__2, onCancellation) : tmp0__anonymous__2;
    } else {
      tmp = CompletedExceptionally_init_$Create$(exception_1, false, 2, null);
    }
    return tmp;
  }
  function toState$default(_this_, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      onCancellation = null;
    return toState_0(_this_, onCancellation);
  }
  function CompletedWithCancellation(result, onCancellation) {
    this._result_1 = result;
    this._onCancellation_0 = onCancellation;
  }
  CompletedWithCancellation.prototype.toString = function () {
    return '' + 'CompletedWithCancellation(result=' + this._result_1 + ', onCancellation=' + this._onCancellation_0 + ')';
  };
  CompletedWithCancellation.prototype.hashCode = function () {
    var result = this._result_1 == null ? 0 : hashCode(this._result_1);
    result = imul(result, 31) + hashCode(this._onCancellation_0) | 0;
    return result;
  };
  CompletedWithCancellation.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedWithCancellation))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof CompletedWithCancellation ? other : THROW_CCE();
    if (!equals_0(this._result_1, tmp0_other_with_cast._result_1))
      return false;
    if (!equals_0(this._onCancellation_0, tmp0_other_with_cast._onCancellation_0))
      return false;
    return true;
  };
  CompletedWithCancellation.$metadata$ = {
    simpleName: 'CompletedWithCancellation',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__36() {
  }
  _no_name_provided__36.prototype.invoke_59 = function (it) {
    return it instanceof CoroutineDispatcher ? it : null;
  };
  _no_name_provided__36.prototype.invoke_84 = function (p1) {
    return this.invoke_59((!(p1 == null) ? isInterface(p1, Element_0) : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__36.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function Key_1() {
    Key_instance_0 = this;
    var tmp = Key_getInstance();
    AbstractCoroutineContextKey.call(this, tmp, _no_name_provided_$factory_28());
  }
  Key_1.$metadata$ = {
    simpleName: 'Key',
    kind: 'object',
    interfaces: []
  };
  var Key_instance_0;
  function Key_getInstance_0() {
    if (Key_instance_0 == null)
      new Key_1();
    return Key_instance_0;
  }
  function CoroutineDispatcher() {
    Key_getInstance_0();
    AbstractCoroutineContextElement.call(this, Key_getInstance());
  }
  CoroutineDispatcher.prototype.isDispatchNeeded_8 = function (context) {
    return true;
  };
  CoroutineDispatcher.prototype.interceptContinuation_9 = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  CoroutineDispatcher.prototype.releaseInterceptedContinuation_9 = function (continuation) {
    var tmp0_safe_receiver = (continuation instanceof DispatchedContinuation ? continuation : THROW_CCE())._get_reusableCancellableContinuation_();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.detachChild();
      Unit_getInstance();
    }
    Unit_getInstance();
  };
  CoroutineDispatcher.prototype.toString = function () {
    return '' + _get_classSimpleName_(this) + '@' + _get_hexAddress_(this);
  };
  CoroutineDispatcher.$metadata$ = {
    simpleName: 'CoroutineDispatcher',
    kind: 'class',
    interfaces: [ContinuationInterceptor]
  };
  function _no_name_provided_$factory_28() {
    var i = new _no_name_provided__36();
    return function (p1) {
      return i.invoke_59(p1);
    };
  }
  function Key_2() {
    Key_instance_1 = this;
  }
  Key_2.$metadata$ = {
    simpleName: 'Key',
    kind: 'object',
    interfaces: [Key_0]
  };
  var Key_instance_1;
  function Key_getInstance_1() {
    if (Key_instance_1 == null)
      new Key_2();
    return Key_instance_1;
  }
  function handleCoroutineException(context, exception) {
    try {
      var tmp0_safe_receiver = context.get_31(Key_getInstance_1());
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.handleException__error(context, exception);
        return Unit_getInstance();
      }
      Unit_getInstance();
    } catch ($p) {
      if ($p instanceof Error) {
        handleCoroutineExceptionImpl(context, handlerException(exception, $p));
        return Unit_getInstance();
      } else {
        {
          throw $p;
        }
      }
    }
    handleCoroutineExceptionImpl(context, exception);
  }
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    var tmp0_apply_0 = RuntimeException_init_$Create$('Exception while trying to handle coroutine exception', thrownException);
    return tmp0_apply_0;
  }
  function CoroutineScope() {
  }
  CoroutineScope.$metadata$ = {
    simpleName: 'CoroutineScope',
    kind: 'interface',
    interfaces: []
  };
  function GlobalScope() {
    GlobalScope_instance = this;
  }
  GlobalScope.prototype._get_coroutineContext__3 = function () {
    return EmptyCoroutineContext_getInstance();
  };
  GlobalScope.$metadata$ = {
    simpleName: 'GlobalScope',
    kind: 'object',
    interfaces: [CoroutineScope]
  };
  var GlobalScope_instance;
  function GlobalScope_getInstance() {
    if (GlobalScope_instance == null)
      new GlobalScope();
    return GlobalScope_instance;
  }
  var CoroutineStart_DEFAULT_instance;
  var CoroutineStart_LAZY_instance;
  var CoroutineStart_ATOMIC_instance;
  var CoroutineStart_UNDISPATCHED_instance;
  var CoroutineStart_entriesInitialized;
  function CoroutineStart_initEntries() {
    if (CoroutineStart_entriesInitialized)
      return Unit_getInstance();
    CoroutineStart_entriesInitialized = true;
    CoroutineStart_DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
    CoroutineStart_LAZY_instance = new CoroutineStart('LAZY', 1);
    CoroutineStart_ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
    CoroutineStart_UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
  }
  function CoroutineStart(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  CoroutineStart.prototype.invoke_61 = function (block, receiver, completion) {
    var tmp0_subject = this;
    var tmp;
    if (tmp0_subject.equals(CoroutineStart_DEFAULT_getInstance())) {
      tmp = startCoroutineCancellable$default(block, receiver, completion, null, 4, null);
    } else if (tmp0_subject.equals(CoroutineStart_ATOMIC_getInstance())) {
      tmp = startCoroutine(block, receiver, completion);
    } else if (tmp0_subject.equals(CoroutineStart_UNDISPATCHED_getInstance())) {
      tmp = startCoroutineUndispatched(block, receiver, completion);
    } else if (tmp0_subject.equals(CoroutineStart_LAZY_getInstance())) {
      tmp = Unit_getInstance();
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  };
  CoroutineStart.prototype._get_isLazy_ = function () {
    return this === CoroutineStart_LAZY_getInstance();
  };
  CoroutineStart.$metadata$ = {
    simpleName: 'CoroutineStart',
    kind: 'class',
    interfaces: []
  };
  function CoroutineStart_DEFAULT_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_DEFAULT_instance;
  }
  function CoroutineStart_LAZY_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_LAZY_instance;
  }
  function CoroutineStart_ATOMIC_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_ATOMIC_instance;
  }
  function CoroutineStart_UNDISPATCHED_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_UNDISPATCHED_instance;
  }
  function CopyableThrowable() {
  }
  CopyableThrowable.$metadata$ = {
    simpleName: 'CopyableThrowable',
    kind: 'interface',
    interfaces: []
  };
  function delay(timeMillis, $cont) {
    if (timeMillis.compareTo_36(new Long(0, 0)) <= 0)
      return Unit_getInstance();
    var tmp0__anonymous__1_1 = $cont;
    var cancellable_2_2 = new CancellableContinuationImpl(intercepted(tmp0__anonymous__1_1), 1);
    cancellable_2_2.initCancellability();
    if (timeMillis.compareTo_36(new Long(-1, 2147483647)) < 0) {
      _get_delay_(cancellable_2_2._get_context__8()).scheduleResumeAfterDelay_3(timeMillis, cancellable_2_2);
    }return cancellable_2_2.getResult();
  }
  function Delay() {
  }
  Delay.$metadata$ = {
    simpleName: 'Delay',
    kind: 'interface',
    interfaces: []
  };
  function _get_delay_(_this_) {
    var tmp = _this_.get_31(Key_getInstance());
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, Delay) : false) ? tmp : null;
    return tmp0_elvis_lhs == null ? _get_DefaultDelay_() : tmp0_elvis_lhs;
  }
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this._useCount = new Long(0, 0);
    this._shared = false;
    this._unconfinedQueue = null;
  }
  EventLoop.prototype.processUnconfinedEvent_0 = function () {
    var tmp0_elvis_lhs = this._unconfinedQueue;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.removeFirstOrNull_2();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.run_3();
    return true;
  };
  EventLoop.prototype.dispatchUnconfined_0 = function (task) {
    var tmp0_elvis_lhs = this._unconfinedQueue;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_also_0 = new ArrayQueue();
      this._unconfinedQueue = tmp0_also_0;
      tmp = tmp0_also_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.addLast_7(task);
  };
  EventLoop.prototype._get_isUnconfinedLoopActive__0 = function () {
    return this._useCount.compareTo_36(delta(this, true)) >= 0;
  };
  EventLoop.prototype._get_isUnconfinedQueueEmpty__0 = function () {
    var tmp0_safe_receiver = this._unconfinedQueue;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_isEmpty__2();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
  EventLoop.prototype.incrementUseCount_0 = function (unconfined) {
    var tmp0_this = this;
    tmp0_this._useCount = tmp0_this._useCount.plus_45(delta(this, unconfined));
    if (!unconfined)
      this._shared = true;
  };
  EventLoop.prototype.decrementUseCount_0 = function (unconfined) {
    var tmp0_this = this;
    tmp0_this._useCount = tmp0_this._useCount.minus_27(delta(this, unconfined));
    if (this._useCount.compareTo_36(new Long(0, 0)) > 0)
      return Unit_getInstance();
    if (this._shared) {
      this.shutdown_0();
    }};
  EventLoop.prototype.shutdown_0 = function () {
  };
  EventLoop.$metadata$ = {
    simpleName: 'EventLoop',
    kind: 'class',
    interfaces: []
  };
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this._ref = new CommonThreadLocal();
  }
  ThreadLocalEventLoop.prototype._get_eventLoop_ = function () {
    var tmp0_elvis_lhs = this._ref.get_32();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_also_0 = createEventLoop();
      ThreadLocalEventLoop_getInstance()._ref.set_0(tmp0_also_0);
      tmp = tmp0_also_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  ThreadLocalEventLoop.$metadata$ = {
    simpleName: 'ThreadLocalEventLoop',
    kind: 'object',
    interfaces: []
  };
  var ThreadLocalEventLoop_instance;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance == null)
      new ThreadLocalEventLoop();
    return ThreadLocalEventLoop_instance;
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init_$Init$_1(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  CompletionHandlerException.$metadata$ = {
    simpleName: 'CompletionHandlerException',
    kind: 'class',
    interfaces: []
  };
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  CoroutinesInternalError.$metadata$ = {
    simpleName: 'CoroutinesInternalError',
    kind: 'class',
    interfaces: []
  };
  function DisposableHandle() {
  }
  DisposableHandle.$metadata$ = {
    simpleName: 'DisposableHandle',
    kind: 'interface',
    interfaces: []
  };
  function Key_3() {
    Key_instance_2 = this;
    Key_getInstance_1();
    Unit_getInstance();
  }
  Key_3.$metadata$ = {
    simpleName: 'Key',
    kind: 'object',
    interfaces: [Key_0]
  };
  var Key_instance_2;
  function Key_getInstance_2() {
    if (Key_instance_2 == null)
      new Key_3();
    return Key_instance_2;
  }
  function Job() {
  }
  Job.prototype.invokeOnCompletion$default_3 = function (onCancelling, invokeImmediately, handler, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      onCancelling = false;
    if (!(($mask0 & 2) === 0))
      invokeImmediately = true;
    return $handler == null ? this.invokeOnCompletion_3(onCancelling, invokeImmediately, handler) : $handler(onCancelling, invokeImmediately, handler);
  };
  Job.$metadata$ = {
    simpleName: 'Job',
    kind: 'interface',
    interfaces: [Element_0]
  };
  function ChildJob() {
  }
  ChildJob.$metadata$ = {
    simpleName: 'ChildJob',
    kind: 'interface',
    interfaces: [Job]
  };
  function ParentJob() {
  }
  ParentJob.$metadata$ = {
    simpleName: 'ParentJob',
    kind: 'interface',
    interfaces: [Job]
  };
  function ChildHandle() {
  }
  ChildHandle.$metadata$ = {
    simpleName: 'ChildHandle',
    kind: 'interface',
    interfaces: [DisposableHandle]
  };
  function NonDisposableHandle() {
    NonDisposableHandle_instance = this;
  }
  NonDisposableHandle.prototype.dispose_9 = function () {
  };
  NonDisposableHandle.prototype.childCancelled_5 = function (cause) {
    return false;
  };
  NonDisposableHandle.prototype.toString = function () {
    return 'NonDisposableHandle';
  };
  NonDisposableHandle.$metadata$ = {
    simpleName: 'NonDisposableHandle',
    kind: 'object',
    interfaces: [DisposableHandle, ChildHandle]
  };
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    if (NonDisposableHandle_instance == null)
      new NonDisposableHandle();
    return NonDisposableHandle_instance;
  }
  var COMPLETING_ALREADY;
  var COMPLETING_WAITING_CHILDREN;
  var COMPLETING_RETRY;
  var TOO_LATE_TO_CANCEL;
  var SEALED;
  var EMPTY_NEW;
  var EMPTY_ACTIVE;
  function Empty(isActive) {
    this._isActive = isActive;
  }
  Empty.prototype._get_isActive__15 = function () {
    return this._isActive;
  };
  Empty.prototype._get_list__10 = function () {
    return null;
  };
  Empty.prototype.toString = function () {
    return '' + 'Empty{' + (this._isActive ? 'Active' : 'New') + '}';
  };
  Empty.$metadata$ = {
    simpleName: 'Empty',
    kind: 'class',
    interfaces: [Incomplete]
  };
  function Incomplete() {
  }
  Incomplete.$metadata$ = {
    simpleName: 'Incomplete',
    kind: 'interface',
    interfaces: []
  };
  function NodeList_0() {
    LinkedListHead.call(this);
  }
  NodeList_0.prototype._get_isActive__15 = function () {
    return true;
  };
  NodeList_0.prototype._get_list__10 = function () {
    return this;
  };
  NodeList_0.prototype.getString = function (state) {
    var tmp0_apply_0_1 = StringBuilder_init_$Create$_0();
    tmp0_apply_0_1.append_5('List{');
    Unit_getInstance();
    tmp0_apply_0_1.append_5(state);
    Unit_getInstance();
    tmp0_apply_0_1.append_5('}[');
    Unit_getInstance();
    var first_3 = true;
    var cur_1_4 = this._get__next__1();
    while (!equals_0(cur_1_4, this)) {
      if (cur_1_4 instanceof JobNode) {
        var tmp0__anonymous__2_5 = cur_1_4;
        if (first_3)
          first_3 = false;
        else {
          tmp0_apply_0_1.append_5(', ');
          Unit_getInstance();
        }
        tmp0_apply_0_1.append_4(tmp0__anonymous__2_5);
        Unit_getInstance();
      } else {
      }
      cur_1_4 = cur_1_4.__next;
    }
    tmp0_apply_0_1.append_5(']');
    Unit_getInstance();
    return tmp0_apply_0_1.toString();
  };
  NodeList_0.prototype.toString = function () {
    return DEBUG ? this.getString('Active') : anyToString(this);
  };
  NodeList_0.$metadata$ = {
    simpleName: 'NodeList',
    kind: 'class',
    interfaces: [Incomplete]
  };
  function JobNode() {
    CompletionHandlerBase.call(this);
  }
  JobNode.prototype._get_job__5 = function () {
    var tmp = this._job;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  JobNode.prototype._get_isActive__15 = function () {
    return true;
  };
  JobNode.prototype._get_list__10 = function () {
    return null;
  };
  JobNode.prototype.dispose_9 = function () {
    return this._get_job__5().removeNode_2(this);
  };
  JobNode.prototype.toString = function () {
    return '' + _get_classSimpleName_(this) + '@' + _get_hexAddress_(this) + '[job@' + _get_hexAddress_(this._get_job__5()) + ']';
  };
  JobNode.$metadata$ = {
    simpleName: 'JobNode',
    kind: 'class',
    interfaces: [DisposableHandle, Incomplete]
  };
  function _set_exceptionsHolder_($this, value) {
    $this.__exceptionsHolder._value_0 = value;
  }
  function _get_exceptionsHolder_($this) {
    return $this.__exceptionsHolder._value_0;
  }
  function allocateList($this) {
    return ArrayList_init_$Create$_0(4);
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._cause;
    var wasCancelling = false;
    wasCancelling = state._get_isCancelling_();
    var exceptions_2 = state.sealLocked(proposedException);
    var finalCause_3 = getFinalRootCause($this, state, exceptions_2);
    if (!(finalCause_3 == null))
      addSuppressedExceptions($this, finalCause_3, exceptions_2);
    var finalException = finalCause_3;
    var tmp;
    if (finalException == null) {
      tmp = proposedUpdate;
    } else if (finalException === proposedException) {
      tmp = proposedUpdate;
    } else {
      tmp = CompletedExceptionally_init_$Create$(finalException, false, 2, null);
    }
    var finalState = tmp;
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) ? true : $this.handleJobException_2(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).makeHandled_0();
        Unit_getInstance();
      }}if (!wasCancelling)
      $this.onCancelling_2(finalException);
    $this.onCompletionInternal_2(finalState);
    var casSuccess = $this.__state_0.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.isEmpty_16()) {
      if (state._get_isCancelling_()) {
        var tmp0_defaultCancellationException_0 = null;
        var tmp1_defaultCancellationException_0 = null;
        var tmp0_elvis_lhs_1 = tmp0_defaultCancellationException_0;
        return new JobCancellationException(tmp0_elvis_lhs_1 == null ? $this.cancellationExceptionMessage_2() : tmp0_elvis_lhs_1, tmp1_defaultCancellationException_0, $this);
      }return null;
    }var tmp$ret$0;
    l$ret$1: do {
      var tmp0_iterator_1 = exceptions.iterator_34();
      while (tmp0_iterator_1.hasNext_10()) {
        var element_2 = tmp0_iterator_1.next_10();
        if (!(element_2 instanceof CancellationException)) {
          tmp$ret$0 = element_2;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = null;
    }
     while (false);
    var firstNonCancellation = tmp$ret$0;
    if (!(firstNonCancellation == null))
      return firstNonCancellation;
    var first = exceptions.get_42(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$2;
      l$ret$3: do {
        var tmp0_iterator_1_0 = exceptions.iterator_34();
        while (tmp0_iterator_1_0.hasNext_10()) {
          var element_2_0 = tmp0_iterator_1_0.next_10();
          var tmp;
          if (!(element_2_0 === first)) {
            tmp = element_2_0 instanceof TimeoutCancellationException;
          } else {
            tmp = false;
          }
          if (tmp) {
            tmp$ret$2 = element_2_0;
            break l$ret$3;
          } else {
          }
        }
        tmp$ret$2 = null;
      }
       while (false);
      var detailedTimeoutException = tmp$ret$2;
      if (!(detailedTimeoutException == null))
        return detailedTimeoutException;
    } else {
    }
    return first;
  }
  function addSuppressedExceptions($this, rootCause, exceptions) {
    if (exceptions._get_size__18() <= 1)
      return Unit_getInstance();
    var seenExceptions = identitySet(exceptions._get_size__18());
    var unwrappedCause = unwrap(rootCause);
    var tmp0_iterator = exceptions.iterator_34();
    while (tmp0_iterator.hasNext_10()) {
      var exception = tmp0_iterator.next_10();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) ? !(unwrapped === unwrappedCause) : false) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.add_13(unwrapped);
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
      } else {
      }
    }
  }
  function tryFinalizeSimpleState($this, state, update) {
    if (!$this.__state_0.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.onCancelling_2(null);
    $this.onCompletionInternal_2(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp0_safe_receiver = $this._get_parentHandle__2();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.dispose_9();
      $this._set_parentHandle__2(NonDisposableHandle_getInstance());
      Unit_getInstance();
    }
    Unit_getInstance();
    var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver._cause;
    if (state instanceof JobNode) {
      try {
        state.invoke(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          $this.handleOnCompletionException_2(new CompletionHandlerException('' + 'Exception in completion handler ' + state + ' for ' + $this, $p));
        } else {
          {
            throw $p;
          }
        }
      }
    } else {
      {
        var tmp2_safe_receiver = state._get_list__10();
        if (tmp2_safe_receiver == null)
          null;
        else {
          notifyCompletion(tmp2_safe_receiver, $this, cause);
          Unit_getInstance();
        }
        Unit_getInstance();
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.onCancelling_2(cause);
    var exception_1 = null;
    var cur_1 = list._get__next__1();
    while (!equals_0(cur_1, list)) {
      if (cur_1 instanceof JobCancellingNode) {
        var tmp0__anonymous__2_2 = cur_1;
        try {
          tmp0__anonymous__2_2.invoke(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var tmp0_safe_receiver_5_5 = exception_1;
            var tmp;
            if (tmp0_safe_receiver_5_5 == null) {
              tmp = null;
            } else {
              tmp = tmp0_safe_receiver_5_5;
            }
            var tmp1_elvis_lhs_4_4 = tmp;
            if (tmp1_elvis_lhs_4_4 == null) {
              exception_1 = new CompletionHandlerException('' + 'Exception in completion handler ' + tmp0__anonymous__2_2 + ' for ' + $this, $p);
              Unit_getInstance();
            } else
              tmp1_elvis_lhs_4_4;
            Unit_getInstance();
          } else {
            {
              throw $p;
            }
          }
        }
      } else {
      }
      cur_1 = cur_1.__next;
    }
    var tmp0_safe_receiver_8 = exception_1;
    if (tmp0_safe_receiver_8 == null)
      null;
    else {
      $this.handleOnCompletionException_2(tmp0_safe_receiver_8);
      Unit_getInstance();
    }
    Unit_getInstance();
    cancelParent($this, cause);
    Unit_getInstance();
  }
  function cancelParent($this, cause) {
    if ($this._get_isScopedCoroutine__2())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this._get_parentHandle__2();
    if (parent === null ? true : parent === NonDisposableHandle_getInstance()) {
      return isCancellation;
    }return parent.childCancelled_5(cause) ? true : isCancellation;
  }
  function notifyCompletion(_this_, $this, cause) {
    var exception_1 = null;
    var cur_1 = _this_._get__next__1();
    while (!equals_0(cur_1, _this_)) {
      if (cur_1 instanceof JobNode) {
        var tmp0__anonymous__2_2 = cur_1;
        try {
          tmp0__anonymous__2_2.invoke(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var tmp0_safe_receiver_5_5 = exception_1;
            var tmp;
            if (tmp0_safe_receiver_5_5 == null) {
              tmp = null;
            } else {
              tmp = tmp0_safe_receiver_5_5;
            }
            var tmp1_elvis_lhs_4_4 = tmp;
            if (tmp1_elvis_lhs_4_4 == null) {
              exception_1 = new CompletionHandlerException('' + 'Exception in completion handler ' + tmp0__anonymous__2_2 + ' for ' + $this, $p);
              Unit_getInstance();
            } else
              tmp1_elvis_lhs_4_4;
            Unit_getInstance();
          } else {
            {
              throw $p;
            }
          }
        }
      } else {
      }
      cur_1 = cur_1.__next;
    }
    var tmp0_safe_receiver_8 = exception_1;
    if (tmp0_safe_receiver_8 == null)
      null;
    else {
      $this.handleOnCompletionException_2(tmp0_safe_receiver_8);
      Unit_getInstance();
    }
    return Unit_getInstance();
  }
  function startInternal($this, state) {
    var tmp0_subject = state;
    if (tmp0_subject instanceof Empty) {
      if (state._isActive)
        return 0;
      if (!$this.__state_0.atomicfu$compareAndSet(state, EMPTY_ACTIVE))
        return -1;
      $this.onStartInternal_2();
      return 1;
    } else {
      if (tmp0_subject instanceof InactiveNodeList) {
        if (!$this.__state_0.atomicfu$compareAndSet(state, state._list_0))
          return -1;
        $this.onStartInternal_2();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function makeNode($this, handler, onCancelling) {
    var tmp;
    if (onCancelling) {
      var tmp0_elvis_lhs = handler instanceof JobCancellingNode ? handler : null;
      tmp = tmp0_elvis_lhs == null ? new InvokeOnCancelling(handler) : tmp0_elvis_lhs;
    } else {
      var tmp1_safe_receiver = handler instanceof JobNode ? handler : null;
      var tmp_0;
      if (tmp1_safe_receiver == null) {
        tmp_0 = null;
      } else {
        tmp_0 = tmp1_safe_receiver;
      }
      var tmp2_elvis_lhs = tmp_0;
      tmp = tmp2_elvis_lhs == null ? new InvokeOnCompletion(handler) : tmp2_elvis_lhs;
    }
    var node = tmp;
    node._job = $this;
    return node;
  }
  function addLastAtomic($this, expect, list, node) {
    var tmp$ret$0;
    l$ret$1: do {
      if (!($this._get_state__3() === expect)) {
        tmp$ret$0 = false;
        break l$ret$1;
      } else {
      }
      list.addLast_13(node);
      tmp$ret$0 = true;
    }
     while (false);
    return tmp$ret$0;
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList_0();
    var update = state._isActive ? list : new InactiveNodeList(list);
    $this.__state_0.atomicfu$compareAndSet(state, update);
    Unit_getInstance();
  }
  function promoteSingleToNodeList($this, state) {
    state.addOneIfEmpty_6(new NodeList_0());
    Unit_getInstance();
    var list = state.__next;
    $this.__state_0.atomicfu$compareAndSet(state, list);
    Unit_getInstance();
  }
  function cancelMakeCompleting($this, cause) {
    while (true) {
      var tmp0__anonymous__1 = $this._get_state__3();
      var tmp;
      if (!(!(tmp0__anonymous__1 == null) ? isInterface(tmp0__anonymous__1, Incomplete) : false)) {
        tmp = true;
      } else {
        {
          var tmp_0;
          if (tmp0__anonymous__1 instanceof Finishing) {
            tmp_0 = tmp0__anonymous__1._get_isCompleting_();
          } else {
            {
              tmp_0 = false;
            }
          }
          tmp = tmp_0;
        }
      }
      if (tmp) {
        return COMPLETING_ALREADY;
      } else {
      }
      var tmp_1 = createCauseException($this, cause);
      var proposedUpdate_2 = CompletedExceptionally_init_$Create$(tmp_1, false, 2, null);
      var finalState_3 = tryMakeCompleting($this, tmp0__anonymous__1, proposedUpdate_2);
      if (!(finalState_3 === COMPLETING_RETRY))
        return finalState_3;
    }
    Unit_getInstance();
  }
  function createCauseException($this, cause) {
    var tmp0_subject = cause;
    var tmp;
    if (tmp0_subject == null ? true : tmp0_subject instanceof Error) {
      var tmp1_elvis_lhs = cause;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp0_defaultCancellationException_0 = null;
        var tmp1_defaultCancellationException_0 = null;
        var tmp0_elvis_lhs_1 = tmp0_defaultCancellationException_0;
        tmp_0 = new JobCancellationException(tmp0_elvis_lhs_1 == null ? $this.cancellationExceptionMessage_2() : tmp0_elvis_lhs_1, tmp1_defaultCancellationException_0, $this);
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      {
        tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).getChildJobCancellationCause_3();
      }
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    while (true) {
      var tmp$ret$0;
      l$ret$1: do {
        var tmp0__anonymous__1 = $this._get_state__3();
        var tmp0_subject_2 = tmp0__anonymous__1;
        if (tmp0_subject_2 instanceof Finishing) {
          if (tmp0__anonymous__1._get_isSealed_())
            return TOO_LATE_TO_CANCEL;
          var wasCancelling_2_4 = tmp0__anonymous__1._get_isCancelling_();
          if (!(cause == null) ? true : !wasCancelling_2_4) {
            var tmp0_elvis_lhs_4_6 = causeExceptionCache;
            var tmp;
            if (tmp0_elvis_lhs_4_6 == null) {
              var tmp0_also_0_5_7 = createCauseException($this, cause);
              causeExceptionCache = tmp0_also_0_5_7;
              tmp = tmp0_also_0_5_7;
            } else {
              tmp = tmp0_elvis_lhs_4_6;
            }
            var causeException_3_5 = tmp;
            tmp0__anonymous__1.addExceptionLocked(causeException_3_5);
          }var tmp1_takeIf_0_6_8 = tmp0__anonymous__1._get_rootCause_();
          var tmp_0;
          if (!wasCancelling_2_4) {
            tmp_0 = tmp1_takeIf_0_6_8;
          } else {
            {
              tmp_0 = null;
            }
          }
          var notifyRootCause_3 = tmp_0;
          var tmp1_safe_receiver_9 = notifyRootCause_3;
          if (tmp1_safe_receiver_9 == null)
            null;
          else {
            notifyCancelling($this, tmp0__anonymous__1._list, tmp1_safe_receiver_9);
            Unit_getInstance();
          }
          Unit_getInstance();
          return COMPLETING_ALREADY;
        } else {
          if (!(tmp0_subject_2 == null) ? isInterface(tmp0_subject_2, Incomplete) : false) {
            var tmp2_elvis_lhs_11 = causeExceptionCache;
            var tmp_1;
            if (tmp2_elvis_lhs_11 == null) {
              var tmp0_also_0_12 = createCauseException($this, cause);
              causeExceptionCache = tmp0_also_0_12;
              tmp_1 = tmp0_also_0_12;
            } else {
              tmp_1 = tmp2_elvis_lhs_11;
            }
            var causeException_10 = tmp_1;
            if (tmp0__anonymous__1._get_isActive__15()) {
              if (tryMakeCancelling($this, tmp0__anonymous__1, causeException_10))
                return COMPLETING_ALREADY;
            } else {
              var finalState_13 = tryMakeCompleting($this, tmp0__anonymous__1, CompletedExceptionally_init_$Create$(causeException_10, false, 2, null));
              if (finalState_13 === COMPLETING_ALREADY) {
                var tmp1_error_0_14 = '' + 'Cannot happen in ' + tmp0__anonymous__1;
                throw IllegalStateException_init_$Create$(toString_1(tmp1_error_0_14));
              } else if (finalState_13 === COMPLETING_RETRY) {
                tmp$ret$0 = Unit_getInstance();
                break l$ret$1;
              } else
                return finalState_13;
            }
          } else {
            return TOO_LATE_TO_CANCEL;
          }
        }
      }
       while (false);
    }
    Unit_getInstance();
  }
  function getOrPromoteCancellingList($this, state) {
    var tmp1_elvis_lhs = state._get_list__10();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_subject = state;
      var tmp_0;
      if (tmp0_subject instanceof Empty) {
        tmp_0 = new NodeList_0();
      } else {
        if (tmp0_subject instanceof JobNode) {
          promoteSingleToNodeList($this, state);
          tmp_0 = null;
        } else {
          {
            var tmp0_error_0 = '' + 'State should have list: ' + state;
            throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
          }
        }
      }
      tmp = tmp_0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryMakeCancelling($this, state, rootCause) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var cancelling = new Finishing(list, false, rootCause);
    if (!$this.__state_0.atomicfu$compareAndSet(state, cancelling))
      return false;
    notifyCancelling($this, list, rootCause);
    return true;
  }
  function tryMakeCompleting($this, state, proposedUpdate) {
    if (!(!(state == null) ? isInterface(state, Incomplete) : false))
      return COMPLETING_ALREADY;
    else {
    }
    var tmp;
    var tmp_0;
    var tmp_1;
    if (state instanceof Empty) {
      tmp_1 = true;
    } else {
      {
        tmp_1 = state instanceof JobNode;
      }
    }
    if (tmp_1) {
      tmp_0 = !(state instanceof ChildHandleNode);
    } else {
      {
        tmp_0 = false;
      }
    }
    if (tmp_0) {
      tmp = !(proposedUpdate instanceof CompletedExceptionally);
    } else {
      {
        tmp = false;
      }
    }
    if (tmp) {
      if (tryFinalizeSimpleState($this, state, proposedUpdate)) {
        return proposedUpdate;
      }return COMPLETING_RETRY;
    } else {
    }
    return tryMakeCompletingSlowPath($this, state, proposedUpdate);
  }
  function tryMakeCompletingSlowPath($this, state, proposedUpdate) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return COMPLETING_RETRY;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var tmp1_elvis_lhs = state instanceof Finishing ? state : null;
    var finishing = tmp1_elvis_lhs == null ? new Finishing(list, false, null) : tmp1_elvis_lhs;
    var notifyRootCause = null;
    if (finishing._get_isCompleting_())
      return COMPLETING_ALREADY;
    finishing._set_isCompleting_(true);
    if (!(finishing === state)) {
      if (!$this.__state_0.atomicfu$compareAndSet(state, finishing))
        return COMPLETING_RETRY;
    }var wasCancelling_2 = finishing._get_isCancelling_();
    var tmp0_safe_receiver_3 = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    if (tmp0_safe_receiver_3 == null)
      null;
    else {
      finishing.addExceptionLocked(tmp0_safe_receiver_3._cause);
      Unit_getInstance();
    }
    Unit_getInstance();
    var tmp0_takeIf_0_4 = finishing._get_rootCause_();
    var tmp_0;
    if (!wasCancelling_2) {
      tmp_0 = tmp0_takeIf_0_4;
    } else {
      {
        tmp_0 = null;
      }
    }
    notifyRootCause = tmp_0;
    var tmp2_safe_receiver = notifyRootCause;
    if (tmp2_safe_receiver == null)
      null;
    else {
      notifyCancelling($this, list, tmp2_safe_receiver);
      Unit_getInstance();
    }
    Unit_getInstance();
    var child = firstChild($this, state);
    if (!(child == null) ? tryWaitForChild($this, finishing, child, proposedUpdate) : false)
      return COMPLETING_WAITING_CHILDREN;
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function _get_exceptionOrNull_(_this_, $this) {
    var tmp0_safe_receiver = _this_ instanceof CompletedExceptionally ? _this_ : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._cause;
  }
  function firstChild($this, state) {
    var tmp1_elvis_lhs = state instanceof ChildHandleNode ? state : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = state._get_list__10();
      tmp = tmp0_safe_receiver == null ? null : nextChild(tmp0_safe_receiver, $this);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    while (true) {
      var $this_1 = $this_0;
      var state_1 = state_0;
      var child_1 = child_0;
      var proposedUpdate_1 = proposedUpdate_0;
      var tmp0__get_asHandler__0 = new ChildCompletion($this_1, state_1, child_1, proposedUpdate_1);
      var handle = child_1._childJob.invokeOnCompletion$default_3(false, false, tmp0__get_asHandler__0, 1, null);
      if (!(handle === NonDisposableHandle_getInstance()))
        return true;
      var tmp0_elvis_lhs = nextChild(child_1, $this_1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return false;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var nextChild_0 = tmp;
      $this_0 = $this_1;
      state_0 = state_1;
      child_0 = nextChild_0;
      proposedUpdate_0 = proposedUpdate_1;
      continue;
    }
  }
  function continueCompleting($this, state, lastChild, proposedUpdate) {
    var waitChild = nextChild(lastChild, $this);
    if (!(waitChild == null) ? tryWaitForChild($this, state, waitChild, proposedUpdate) : false)
      return Unit_getInstance();
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.afterCompletion_2(finalState);
  }
  function nextChild(_this_, $this) {
    var cur = _this_;
    $l$break: while (true) {
      var tmp0__get_isRemoved__0 = cur;
      if (!tmp0__get_isRemoved__0.__removed) {
        break $l$break;
      }var tmp1__get_prevNode__0 = cur;
      cur = tmp1__get_prevNode__0.__prev;
    }
    while (true) {
      var tmp2__get_nextNode__0 = cur;
      cur = tmp2__get_nextNode__0.__next;
      var tmp3__get_isRemoved__0 = cur;
      if (tmp3__get_isRemoved__0.__removed)
        continue;
      else {
      }
      if (cur instanceof ChildHandleNode)
        return cur;
      else {
      }
      if (cur instanceof NodeList_0)
        return null;
      else {
      }
    }
  }
  function stateString($this, state) {
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof Finishing) {
      tmp = state._get_isCancelling_() ? 'Cancelling' : state._get_isCompleting_() ? 'Completing' : 'Active';
    } else {
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
        tmp = state._get_isActive__15() ? 'Active' : 'New';
      } else {
        if (tmp0_subject instanceof CompletedExceptionally) {
          tmp = 'Cancelled';
        } else {
          {
            tmp = 'Completed';
          }
        }
      }
    }
    return tmp;
  }
  function Finishing(list, isCompleting, rootCause) {
    this._list = list;
    this.__isCompleting = atomic_0(isCompleting);
    this.__rootCause = atomic(rootCause);
    this.__exceptionsHolder = atomic(null);
  }
  Finishing.prototype._get_list__10 = function () {
    return this._list;
  };
  Finishing.prototype._set_isCompleting_ = function (value) {
    this.__isCompleting._value_1 = value;
  };
  Finishing.prototype._get_isCompleting_ = function () {
    return this.__isCompleting._value_1;
  };
  Finishing.prototype._set_rootCause_ = function (value) {
    this.__rootCause._value_0 = value;
  };
  Finishing.prototype._get_rootCause_ = function () {
    return this.__rootCause._value_0;
  };
  Finishing.prototype._get_isSealed_ = function () {
    return _get_exceptionsHolder_(this) === SEALED;
  };
  Finishing.prototype._get_isCancelling_ = function () {
    return !(this._get_rootCause_() == null);
  };
  Finishing.prototype._get_isActive__15 = function () {
    return this._get_rootCause_() == null;
  };
  Finishing.prototype.sealLocked = function (proposedException) {
    var eh = _get_exceptionsHolder_(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        var tmp0_also_0 = allocateList(this);
        tmp0_also_0.add_13(eh);
        Unit_getInstance();
        tmp = tmp0_also_0;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          {
            var tmp1_error_0 = '' + 'State is ' + eh;
            throw IllegalStateException_init_$Create$(toString_1(tmp1_error_0));
          }
        }
      }
    }
    var list = tmp;
    var rootCause = this._get_rootCause_();
    var tmp0_safe_receiver = rootCause;
    if (tmp0_safe_receiver == null)
      null;
    else {
      list.add_8(0, tmp0_safe_receiver);
      Unit_getInstance();
    }
    Unit_getInstance();
    if (!(proposedException == null) ? !equals_0(proposedException, rootCause) : false) {
      list.add_13(proposedException);
      Unit_getInstance();
    }_set_exceptionsHolder_(this, SEALED);
    return list;
  };
  Finishing.prototype.addExceptionLocked = function (exception) {
    var rootCause = this._get_rootCause_();
    if (rootCause == null) {
      this._set_rootCause_(exception);
      return Unit_getInstance();
    }if (exception === rootCause)
      return Unit_getInstance();
    var eh = _get_exceptionsHolder_(this);
    if (eh == null)
      _set_exceptionsHolder_(this, exception);
    else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_getInstance();
        var tmp0_apply_0 = allocateList(this);
        tmp0_apply_0.add_13(eh);
        Unit_getInstance();
        tmp0_apply_0.add_13(exception);
        Unit_getInstance();
        _set_exceptionsHolder_(this, tmp0_apply_0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).add_13(exception);
          Unit_getInstance();
        } else {
          {
            var tmp1_error_0 = '' + 'State is ' + eh;
            throw IllegalStateException_init_$Create$(toString_1(tmp1_error_0));
          }
        }
      }
    }
  };
  Finishing.prototype.toString = function () {
    return '' + 'Finishing[cancelling=' + this._get_isCancelling_() + ', completing=' + this._get_isCompleting_() + ', rootCause=' + this._get_rootCause_() + ', exceptions=' + _get_exceptionsHolder_(this) + ', list=' + this._list + ']';
  };
  Finishing.$metadata$ = {
    simpleName: 'Finishing',
    kind: 'class',
    interfaces: [Incomplete]
  };
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this._parent = parent;
    this._state_1 = state;
    this._child = child;
    this._proposedUpdate = proposedUpdate;
  }
  ChildCompletion.prototype.invoke_69 = function (cause) {
    continueCompleting(this._parent, this._state_1, this._child, this._proposedUpdate);
  };
  ChildCompletion.prototype.invoke = function (cause) {
    return this.invoke_69(cause);
  };
  ChildCompletion.$metadata$ = {
    simpleName: 'ChildCompletion',
    kind: 'class',
    interfaces: []
  };
  function JobSupport(active) {
    this.__state_0 = atomic(active ? EMPTY_ACTIVE : EMPTY_NEW);
    this.__parentHandle_0 = atomic(null);
  }
  JobSupport.prototype._get_key__18 = function () {
    return Key_getInstance_2();
  };
  JobSupport.prototype._set_parentHandle__2 = function (value) {
    this.__parentHandle_0._value_0 = value;
  };
  JobSupport.prototype._get_parentHandle__2 = function () {
    return this.__parentHandle_0._value_0;
  };
  JobSupport.prototype.initParentJobInternal_2 = function (parent) {
    if (parent == null) {
      this._set_parentHandle__2(NonDisposableHandle_getInstance());
      return Unit_getInstance();
    }parent.start_7();
    Unit_getInstance();
    var handle = parent.attachChild_3(this);
    this._set_parentHandle__2(handle);
    if (this._get_isCompleted__3()) {
      handle.dispose_9();
      this._set_parentHandle__2(NonDisposableHandle_getInstance());
    }};
  JobSupport.prototype._get_state__3 = function () {
    var tmp0_loop_0 = this.__state_0;
    while (true) {
      var tmp1__anonymous__1 = tmp0_loop_0._value_0;
      if (!(tmp1__anonymous__1 instanceof OpDescriptor))
        return tmp1__anonymous__1;
      else {
      }
      tmp1__anonymous__1.perform(this);
      Unit_getInstance();
    }
    Unit_getInstance();
  };
  JobSupport.prototype._get_isActive__15 = function () {
    var state = this._get_state__3();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state._get_isActive__15();
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  JobSupport.prototype._get_isCompleted__3 = function () {
    var tmp = this._get_state__3();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  JobSupport.prototype.start_7 = function () {
    while (true) {
      var tmp0__anonymous__1 = this._get_state__3();
      var tmp0_subject_2 = startInternal(this, tmp0__anonymous__1);
      if (tmp0_subject_2 === 0)
        return false;
      else if (tmp0_subject_2 === 1)
        return true;
    }
    Unit_getInstance();
  };
  JobSupport.prototype.onStartInternal_2 = function () {
  };
  JobSupport.prototype.getCancellationException_3 = function () {
    var state = this._get_state__3();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state._get_rootCause_();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.toCancellationException_2(tmp0_safe_receiver, '' + _get_classSimpleName_(this) + ' is cancelling');
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp0_error_0 = '' + 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var tmp1_error_0 = '' + 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_1(tmp1_error_0));
      } else {
        if (state instanceof CompletedExceptionally) {
          var tmp_1 = state._cause;
          tmp = this.toCancellationException$default_2(tmp_1, null, 1, null);
        } else {
          {
            tmp = new JobCancellationException('' + _get_classSimpleName_(this) + ' has completed normally', null, this);
          }
        }
      }
    }
    return tmp;
  };
  JobSupport.prototype.toCancellationException_2 = function (_this__0, message) {
    var tmp0_elvis_lhs = _this__0 instanceof CancellationException ? _this__0 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_elvis_lhs_1 = message;
      tmp = new JobCancellationException(tmp0_elvis_lhs_1 == null ? this.cancellationExceptionMessage_2() : tmp0_elvis_lhs_1, _this__0, this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  JobSupport.prototype.toCancellationException$default_2 = function (_this__0, message, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      message = null;
    return this.toCancellationException_2(_this__0, message);
  };
  JobSupport.prototype.invokeOnCompletion_3 = function (onCancelling, invokeImmediately, handler) {
    var node = makeNode(this, handler, onCancelling);
    while (true) {
      var tmp$ret$0;
      l$ret$1: do {
        var tmp0__anonymous__1 = this._get_state__3();
        var tmp0_subject_2 = tmp0__anonymous__1;
        if (tmp0_subject_2 instanceof Empty) {
          if (tmp0__anonymous__1._isActive) {
            if (this.__state_0.atomicfu$compareAndSet(tmp0__anonymous__1, node))
              return node;
          } else
            promoteEmptyToNodeList(this, tmp0__anonymous__1);
        } else {
          if (!(tmp0_subject_2 == null) ? isInterface(tmp0_subject_2, Incomplete) : false) {
            var list_3 = tmp0__anonymous__1._get_list__10();
            if (list_3 == null) {
              promoteSingleToNodeList(this, tmp0__anonymous__1 instanceof JobNode ? tmp0__anonymous__1 : THROW_CCE());
            } else {
              var rootCause_4 = null;
              var handle_5 = NonDisposableHandle_getInstance();
              var tmp;
              if (onCancelling) {
                tmp = tmp0__anonymous__1 instanceof Finishing;
              } else {
                tmp = false;
              }
              if (tmp) {
                rootCause_4 = tmp0__anonymous__1._get_rootCause_();
                var tmp_0;
                if (rootCause_4 == null) {
                  tmp_0 = true;
                } else {
                  var tmp_1;
                  if (handler instanceof ChildHandleNode) {
                    tmp_1 = !tmp0__anonymous__1._get_isCompleting_();
                  } else {
                    {
                      tmp_1 = false;
                    }
                  }
                  tmp_0 = tmp_1;
                }
                if (tmp_0) {
                  if (!addLastAtomic(this, tmp0__anonymous__1, list_3, node)) {
                    tmp$ret$0 = Unit_getInstance();
                    break l$ret$1;
                  }if (rootCause_4 == null)
                    return node;
                  handle_5 = node;
                } else {
                }
              } else {
              }
              if (!(rootCause_4 == null)) {
                if (invokeImmediately)
                  invokeIt(handler, rootCause_4);
                return handle_5;
              } else {
                if (addLastAtomic(this, tmp0__anonymous__1, list_3, node))
                  return node;
              }
            }
          } else {
            {
              if (invokeImmediately) {
                var tmp1_safe_receiver_6 = tmp0__anonymous__1 instanceof CompletedExceptionally ? tmp0__anonymous__1 : null;
                invokeIt(handler, tmp1_safe_receiver_6 == null ? null : tmp1_safe_receiver_6._cause);
              }return NonDisposableHandle_getInstance();
            }
          }
        }
      }
       while (false);
    }
    Unit_getInstance();
  };
  JobSupport.prototype.removeNode_2 = function (node) {
    while (true) {
      var tmp0__anonymous__1 = this._get_state__3();
      var tmp0_subject_2 = tmp0__anonymous__1;
      if (tmp0_subject_2 instanceof JobNode) {
        if (!(tmp0__anonymous__1 === node))
          return Unit_getInstance();
        if (this.__state_0.atomicfu$compareAndSet(tmp0__anonymous__1, EMPTY_ACTIVE))
          return Unit_getInstance();
      } else {
        if (!(tmp0_subject_2 == null) ? isInterface(tmp0_subject_2, Incomplete) : false) {
          if (!(tmp0__anonymous__1._get_list__10() == null)) {
            node.remove_7();
            Unit_getInstance();
          }return Unit_getInstance();
        } else {
          return Unit_getInstance();
        }
      }
    }
    Unit_getInstance();
  };
  JobSupport.prototype._get_onCancelComplete__2 = function () {
    return false;
  };
  JobSupport.prototype.cancellationExceptionMessage_2 = function () {
    return 'Job was cancelled';
  };
  JobSupport.prototype.parentCancelled_4 = function (parentJob) {
    this.cancelImpl_2(parentJob);
    Unit_getInstance();
  };
  JobSupport.prototype.childCancelled_5 = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    else {
    }
    return this.cancelImpl_2(cause) ? this._get_handlesException__2() : false;
  };
  JobSupport.prototype.cancelImpl_2 = function (cause) {
    var finalState = COMPLETING_ALREADY;
    if (this._get_onCancelComplete__2()) {
      finalState = cancelMakeCompleting(this, cause);
      if (finalState === COMPLETING_WAITING_CHILDREN)
        return true;
    }if (finalState === COMPLETING_ALREADY) {
      finalState = makeCancelling(this, cause);
    }var tmp;
    if (finalState === COMPLETING_ALREADY) {
      tmp = true;
    } else if (finalState === COMPLETING_WAITING_CHILDREN) {
      tmp = true;
    } else if (finalState === TOO_LATE_TO_CANCEL) {
      tmp = false;
    } else {
      this.afterCompletion_2(finalState);
      tmp = true;
    }
    return tmp;
  };
  JobSupport.prototype.getChildJobCancellationCause_3 = function () {
    var state = this._get_state__3();
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof Finishing) {
      tmp = state._get_rootCause_();
    } else {
      if (tmp0_subject instanceof CompletedExceptionally) {
        tmp = state._cause;
      } else {
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
          var tmp0_error_0 = '' + 'Cannot be cancelling child in this state: ' + state;
          throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
        } else {
          {
            tmp = null;
          }
        }
      }
    }
    var rootCause = tmp;
    var tmp1_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp1_elvis_lhs == null ? new JobCancellationException('' + 'Parent job is ' + stateString(this, state), rootCause, this) : tmp1_elvis_lhs;
  };
  JobSupport.prototype.makeCompletingOnce_2 = function (proposedUpdate) {
    while (true) {
      var tmp$ret$0;
      l$ret$1: do {
        var tmp0__anonymous__1 = this._get_state__3();
        var finalState_2 = tryMakeCompleting(this, tmp0__anonymous__1, proposedUpdate);
        if (finalState_2 === COMPLETING_ALREADY)
          throw IllegalStateException_init_$Create$_0('' + 'Job ' + this + ' is already complete or completing, ' + ('' + 'but is being completed with ' + proposedUpdate), _get_exceptionOrNull_(proposedUpdate, this));
        else if (finalState_2 === COMPLETING_RETRY) {
          tmp$ret$0 = Unit_getInstance();
          break l$ret$1;
        } else
          return finalState_2;
      }
       while (false);
    }
    Unit_getInstance();
  };
  JobSupport.prototype.attachChild_3 = function (child) {
    var tmp0__get_asHandler__0 = new ChildHandleNode(child);
    var tmp = this.invokeOnCompletion$default_3(true, false, tmp0__get_asHandler__0, 2, null);
    return isInterface(tmp, ChildHandle) ? tmp : THROW_CCE();
  };
  JobSupport.prototype.handleOnCompletionException_2 = function (exception) {
    throw exception;
  };
  JobSupport.prototype.onCancelling_2 = function (cause) {
  };
  JobSupport.prototype._get_isScopedCoroutine__2 = function () {
    return false;
  };
  JobSupport.prototype._get_handlesException__2 = function () {
    return true;
  };
  JobSupport.prototype.handleJobException_2 = function (exception) {
    return false;
  };
  JobSupport.prototype.onCompletionInternal_2 = function (state) {
  };
  JobSupport.prototype.afterCompletion_2 = function (state) {
  };
  JobSupport.prototype.toString = function () {
    return '' + this.toDebugString_2() + '@' + _get_hexAddress_(this);
  };
  JobSupport.prototype.toDebugString_2 = function () {
    return '' + this.nameString_3() + '{' + stateString(this, this._get_state__3()) + '}';
  };
  JobSupport.prototype.nameString_3 = function () {
    return _get_classSimpleName_(this);
  };
  JobSupport.$metadata$ = {
    simpleName: 'JobSupport',
    kind: 'class',
    interfaces: [Job, ChildJob, ParentJob, SelectClause0]
  };
  function boxIncomplete(_this_) {
    var tmp;
    if (!(_this_ == null) ? isInterface(_this_, Incomplete) : false) {
      tmp = new IncompleteStateBox(_this_);
    } else {
      {
        tmp = _this_;
      }
    }
    return tmp;
  }
  function JobCancellingNode() {
    JobNode.call(this);
  }
  JobCancellingNode.$metadata$ = {
    simpleName: 'JobCancellingNode',
    kind: 'class',
    interfaces: []
  };
  function InactiveNodeList(list) {
    this._list_0 = list;
  }
  InactiveNodeList.prototype._get_list__10 = function () {
    return this._list_0;
  };
  InactiveNodeList.prototype._get_isActive__15 = function () {
    return false;
  };
  InactiveNodeList.prototype.toString = function () {
    return DEBUG ? this._list_0.getString('New') : anyToString(this);
  };
  InactiveNodeList.$metadata$ = {
    simpleName: 'InactiveNodeList',
    kind: 'class',
    interfaces: [Incomplete]
  };
  function ChildHandleNode(childJob) {
    JobCancellingNode.call(this);
    this._childJob = childJob;
  }
  ChildHandleNode.prototype.invoke_69 = function (cause) {
    return this._childJob.parentCancelled_4(this._get_job__5());
  };
  ChildHandleNode.prototype.invoke = function (cause) {
    return this.invoke_69(cause);
  };
  ChildHandleNode.prototype.childCancelled_5 = function (cause) {
    return this._get_job__5().childCancelled_5(cause);
  };
  ChildHandleNode.$metadata$ = {
    simpleName: 'ChildHandleNode',
    kind: 'class',
    interfaces: [ChildHandle]
  };
  function InvokeOnCancelling(handler) {
    JobCancellingNode.call(this);
    this._handler_0 = handler;
    this.__invoked = atomic_1(0);
  }
  InvokeOnCancelling.prototype.invoke_69 = function (cause) {
    if (this.__invoked.atomicfu$compareAndSet(0, 1))
      this._handler_0(cause);
  };
  InvokeOnCancelling.prototype.invoke = function (cause) {
    return this.invoke_69(cause);
  };
  InvokeOnCancelling.$metadata$ = {
    simpleName: 'InvokeOnCancelling',
    kind: 'class',
    interfaces: []
  };
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this._handler_1 = handler;
  }
  InvokeOnCompletion.prototype.invoke_69 = function (cause) {
    return this._handler_1(cause);
  };
  InvokeOnCompletion.prototype.invoke = function (cause) {
    return this.invoke_69(cause);
  };
  InvokeOnCompletion.$metadata$ = {
    simpleName: 'InvokeOnCompletion',
    kind: 'class',
    interfaces: []
  };
  function IncompleteStateBox(state) {
    this._state_2 = state;
  }
  IncompleteStateBox.$metadata$ = {
    simpleName: 'IncompleteStateBox',
    kind: 'class',
    interfaces: []
  };
  function ChildContinuation(child) {
    JobCancellingNode.call(this);
    this._child_0 = child;
  }
  ChildContinuation.prototype.invoke_69 = function (cause) {
    this._child_0.parentCancelled_2(this._child_0.getContinuationCancellationCause(this._get_job__5()));
  };
  ChildContinuation.prototype.invoke = function (cause) {
    return this.invoke_69(cause);
  };
  ChildContinuation.$metadata$ = {
    simpleName: 'ChildContinuation',
    kind: 'class',
    interfaces: []
  };
  function MainCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  MainCoroutineDispatcher.prototype.toString = function () {
    var tmp0_elvis_lhs = this.toStringInternalImpl_0();
    return tmp0_elvis_lhs == null ? '' + _get_classSimpleName_(this) + '@' + _get_hexAddress_(this) : tmp0_elvis_lhs;
  };
  MainCoroutineDispatcher.prototype.toStringInternalImpl_0 = function () {
    var main_0 = Dispatchers_getInstance()._Main;
    if (this === main_0)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main_0._get_immediate__0();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UnsupportedOperationException) {
        tmp_0 = null;
      } else {
        {
          throw $p;
        }
      }
      tmp = tmp_0;
    }
    var immediate = tmp;
    if (this === immediate)
      return 'Dispatchers.Main.immediate';
    return null;
  };
  MainCoroutineDispatcher.$metadata$ = {
    simpleName: 'MainCoroutineDispatcher',
    kind: 'class',
    interfaces: []
  };
  function TimeoutCancellationException() {
  }
  TimeoutCancellationException.$metadata$ = {
    simpleName: 'TimeoutCancellationException',
    kind: 'class',
    interfaces: [CopyableThrowable]
  };
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  Unconfined.prototype.isDispatchNeeded_8 = function (context) {
    return false;
  };
  Unconfined.prototype.dispatch_8 = function (context, block) {
    var yieldContext = context.get_31(Key_getInstance_3());
    if (!(yieldContext == null)) {
      yieldContext.dispatcherWasUnconfined__error = true;
      return Unit_getInstance();
    }throw UnsupportedOperationException_init_$Create$_0('Dispatchers.Unconfined.dispatch function can only be used by the yield function. If you wrap Unconfined dispatcher in your code, make sure you properly delegate isDispatchNeeded and dispatch calls.');
  };
  Unconfined.prototype.toString = function () {
    return 'Dispatchers.Unconfined';
  };
  Unconfined.$metadata$ = {
    simpleName: 'Unconfined',
    kind: 'object',
    interfaces: []
  };
  var Unconfined_instance;
  function Unconfined_getInstance() {
    if (Unconfined_instance == null)
      new Unconfined();
    return Unconfined_instance;
  }
  function Key_4() {
    Key_instance_3 = this;
  }
  Key_4.$metadata$ = {
    simpleName: 'Key',
    kind: 'object',
    interfaces: [Key_0]
  };
  var Key_instance_3;
  function Key_getInstance_3() {
    if (Key_instance_3 == null)
      new Key_4();
    return Key_instance_3;
  }
  function ensureCapacity($this) {
    var currentSize = $this._elements.length;
    var newCapacity = currentSize << 1;
    var newElements = fillArrayVal(Array(newCapacity), null);
    var tmp0_copyInto_0 = $this._elements;
    var tmp1_copyInto_0 = $this._head;
    var tmp2_copyInto_0 = 0;
    var tmp3_copyInto_0 = tmp0_copyInto_0.length;
    arrayCopy_0(tmp0_copyInto_0, newElements, tmp2_copyInto_0, tmp1_copyInto_0, tmp3_copyInto_0);
    Unit_getInstance();
    var tmp4_copyInto_0 = $this._elements;
    var tmp5_copyInto_0 = $this._elements.length - $this._head | 0;
    var tmp6_copyInto_0 = $this._head;
    var tmp7_copyInto_0 = 0;
    arrayCopy_0(tmp4_copyInto_0, newElements, tmp5_copyInto_0, tmp7_copyInto_0, tmp6_copyInto_0);
    Unit_getInstance();
    $this._elements = newElements;
    $this._head = 0;
    $this._tail = currentSize;
  }
  function ArrayQueue() {
    var tmp = this;
    var tmp0_arrayOfNulls_0 = 16;
    tmp._elements = fillArrayVal(Array(tmp0_arrayOfNulls_0), null);
    this._head = 0;
    this._tail = 0;
  }
  ArrayQueue.prototype._get_isEmpty__2 = function () {
    return this._head === this._tail;
  };
  ArrayQueue.prototype.addLast_7 = function (element) {
    this._elements[this._tail] = element;
    this._tail = (this._tail + 1 | 0) & (this._elements.length - 1 | 0);
    if (this._tail === this._head)
      ensureCapacity(this);
  };
  ArrayQueue.prototype.removeFirstOrNull_2 = function () {
    if (this._head === this._tail)
      return null;
    var element = this._elements[this._head];
    this._elements[this._head] = null;
    this._head = (this._head + 1 | 0) & (this._elements.length - 1 | 0);
    return isObject(element) ? element : THROW_CCE();
  };
  ArrayQueue.$metadata$ = {
    simpleName: 'ArrayQueue',
    kind: 'class',
    interfaces: []
  };
  function OpDescriptor() {
  }
  OpDescriptor.$metadata$ = {
    simpleName: 'OpDescriptor',
    kind: 'class',
    interfaces: []
  };
  var UNDEFINED;
  var REUSABLE_CLAIMED;
  function resumeCancellableWith(_this_, result, onCancellation) {
    var tmp0_subject = _this_;
    var tmp;
    if (tmp0_subject instanceof DispatchedContinuation) {
      var tmp2_resumeCancellableWith_0 = _this_;
      var state_1 = toState_0(result, onCancellation);
      var tmp_0;
      if (tmp2_resumeCancellableWith_0._dispatcher.isDispatchNeeded_8(tmp2_resumeCancellableWith_0._get_context__8())) {
        tmp2_resumeCancellableWith_0.__state_1 = state_1;
        tmp2_resumeCancellableWith_0._set_resumeMode__0(1);
        tmp_0 = tmp2_resumeCancellableWith_0._dispatcher.dispatch_8(tmp2_resumeCancellableWith_0._get_context__8(), tmp2_resumeCancellableWith_0);
      } else {
        var tmp$ret$0;
        l$ret$1: do {
          var tmp0_executeUnconfined_0 = 1;
          var tmp1_executeUnconfined_0 = false;
          var eventLoop_2 = ThreadLocalEventLoop_getInstance()._get_eventLoop_();
          if (tmp1_executeUnconfined_0 ? eventLoop_2._get_isUnconfinedQueueEmpty__0() : false) {
            tmp$ret$0 = false;
            break l$ret$1;
          }var tmp_1;
          if (eventLoop_2._get_isUnconfinedLoopActive__0()) {
            tmp2_resumeCancellableWith_0.__state_1 = state_1;
            tmp2_resumeCancellableWith_0._set_resumeMode__0(tmp0_executeUnconfined_0);
            eventLoop_2.dispatchUnconfined_0(tmp2_resumeCancellableWith_0);
            tmp_1 = true;
          } else {
            eventLoop_2.incrementUseCount_0(true);
            try {
              var tmp$ret$2;
              l$ret$3: do {
                var job_1_4 = tmp2_resumeCancellableWith_0._get_context__8().get_31(Key_getInstance_2());
                if (!(job_1_4 == null) ? !job_1_4._get_isActive__15() : false) {
                  var cause_2_5 = job_1_4.getCancellationException_3();
                  tmp2_resumeCancellableWith_0.cancelCompletedResult_1(state_1, cause_2_5);
                  var tmp0_failure_0_1_6 = Companion_getInstance_2();
                  tmp2_resumeCancellableWith_0.resumeWith_8(_Result___init__impl_(createFailure(cause_2_5)));
                  tmp$ret$2 = true;
                  break l$ret$3;
                }tmp$ret$2 = false;
              }
               while (false);
              if (!tmp$ret$2) {
                var tmp0_withContinuationContext_0_7 = tmp2_resumeCancellableWith_0._continuation_0;
                var tmp1_withContinuationContext_0_8 = tmp2_resumeCancellableWith_0._countOrElement;
                tmp2_resumeCancellableWith_0._continuation_0.resumeWith_8(result);
              } else {
              }
              $l$break: while (true) {
                if (!eventLoop_2.processUnconfinedEvent_0())
                  break $l$break;
              }
            } catch ($p) {
              if ($p instanceof Error) {
                tmp2_resumeCancellableWith_0.handleFatalException_1($p, null);
              } else {
                {
                  throw $p;
                }
              }
            }
            finally {
              eventLoop_2.decrementUseCount_0(true);
            }
            tmp_1 = false;
          }
          tmp$ret$0 = tmp_1;
        }
         while (false);
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    } else {
      {
        tmp = _this_.resumeWith_8(result);
      }
    }
    return tmp;
  }
  function resumeCancellableWith$default(_this_, result, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      onCancellation = null;
    return resumeCancellableWith(_this_, result, onCancellation);
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, -1);
    this._dispatcher = dispatcher;
    this._continuation_0 = continuation;
    this.__state_1 = UNDEFINED;
    this._countOrElement = threadContextElements(this._get_context__8());
    this.__reusableCancellableContinuation = atomic(null);
  }
  DispatchedContinuation.prototype._get_context__8 = function () {
    return this._continuation_0._get_context__8();
  };
  DispatchedContinuation.prototype._get_reusableCancellableContinuation_ = function () {
    var tmp = this.__reusableCancellableContinuation._value_0;
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  };
  DispatchedContinuation.prototype.isReusable = function (requester) {
    var tmp0_elvis_lhs = this.__reusableCancellableContinuation._value_0;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var value = tmp;
    if (value instanceof CancellableContinuationImpl)
      return value === requester;
    else {
    }
    return true;
  };
  DispatchedContinuation.prototype.checkPostponedCancellation = function (continuation) {
    var tmp0_loop_0 = this.__reusableCancellableContinuation;
    while (true) {
      var tmp1__anonymous__1 = tmp0_loop_0._value_0;
      if (tmp1__anonymous__1 === REUSABLE_CLAIMED) {
        if (this.__reusableCancellableContinuation.atomicfu$compareAndSet(REUSABLE_CLAIMED, continuation))
          return null;
      } else {
        if (tmp1__anonymous__1 === null)
          return null;
        else {
          if (tmp1__anonymous__1 instanceof Error) {
            var tmp0_require_0_2 = this.__reusableCancellableContinuation.atomicfu$compareAndSet(tmp1__anonymous__1, null);
            if (!tmp0_require_0_2) {
              var message_2_1_3 = 'Failed requirement.';
              throw IllegalArgumentException_init_$Create$(toString_1(message_2_1_3));
            }return tmp1__anonymous__1;
          } else {
            {
              var tmp1_error_0_4 = '' + 'Inconsistent state ' + tmp1__anonymous__1;
              throw IllegalStateException_init_$Create$(toString_1(tmp1_error_0_4));
            }
          }
        }
      }
    }
    Unit_getInstance();
  };
  DispatchedContinuation.prototype.postponeCancellation = function (cause) {
    var tmp0_loop_0 = this.__reusableCancellableContinuation;
    while (true) {
      var tmp1__anonymous__1 = tmp0_loop_0._value_0;
      var tmp0_subject_2 = tmp1__anonymous__1;
      if (equals_0(tmp0_subject_2, REUSABLE_CLAIMED)) {
        if (this.__reusableCancellableContinuation.atomicfu$compareAndSet(REUSABLE_CLAIMED, cause))
          return true;
      } else {
        if (tmp0_subject_2 instanceof Error)
          return true;
        else {
          {
            if (this.__reusableCancellableContinuation.atomicfu$compareAndSet(tmp1__anonymous__1, null))
              return false;
          }
        }
      }
    }
    Unit_getInstance();
  };
  DispatchedContinuation.prototype.takeState_1 = function () {
    var state = this.__state_1;
    this.__state_1 = UNDEFINED;
    return state;
  };
  DispatchedContinuation.prototype._get_delegate__1 = function () {
    return this;
  };
  DispatchedContinuation.prototype.resumeWith_8 = function (result) {
    var context = this._continuation_0._get_context__8();
    var state = toState$default(result, null, 1, null);
    if (this._dispatcher.isDispatchNeeded_8(context)) {
      this.__state_1 = state;
      this._set_resumeMode__0(0);
      this._dispatcher.dispatch_8(context, this);
    } else {
      var tmp$ret$0;
      l$ret$1: do {
        var tmp0_executeUnconfined_0 = 0;
        var tmp1_executeUnconfined_0 = false;
        var eventLoop_2 = ThreadLocalEventLoop_getInstance()._get_eventLoop_();
        if (tmp1_executeUnconfined_0 ? eventLoop_2._get_isUnconfinedQueueEmpty__0() : false) {
          tmp$ret$0 = false;
          break l$ret$1;
        }var tmp;
        if (eventLoop_2._get_isUnconfinedLoopActive__0()) {
          this.__state_1 = state;
          this._set_resumeMode__0(tmp0_executeUnconfined_0);
          eventLoop_2.dispatchUnconfined_0(this);
          tmp = true;
        } else {
          eventLoop_2.incrementUseCount_0(true);
          try {
            var tmp0_withCoroutineContext_0_4 = this._get_context__8();
            var tmp1_withCoroutineContext_0_5 = this._countOrElement;
            this._continuation_0.resumeWith_8(result);
            $l$break: while (true) {
              if (!eventLoop_2.processUnconfinedEvent_0())
                break $l$break;
            }
          } catch ($p) {
            if ($p instanceof Error) {
              this.handleFatalException_1($p, null);
            } else {
              {
                throw $p;
              }
            }
          }
          finally {
            eventLoop_2.decrementUseCount_0(true);
          }
          tmp = false;
        }
        tmp$ret$0 = tmp;
      }
       while (false);
      Unit_getInstance();
    }
  };
  DispatchedContinuation.prototype.cancelCompletedResult_1 = function (takenState, cause) {
    if (takenState instanceof CompletedWithCancellation) {
      takenState._onCancellation_0(cause);
    } else {
    }
  };
  DispatchedContinuation.prototype.toString = function () {
    return '' + 'DispatchedContinuation[' + this._dispatcher + ', ' + toDebugString(this._continuation_0) + ']';
  };
  DispatchedContinuation.$metadata$ = {
    simpleName: 'DispatchedContinuation',
    kind: 'class',
    interfaces: [CoroutineStackFrame, Continuation]
  };
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this._resumeMode = resumeMode;
  }
  DispatchedTask.prototype._set_resumeMode__0 = function (_set___) {
    this._resumeMode = _set___;
  };
  DispatchedTask.prototype._get_resumeMode__0 = function () {
    return this._resumeMode;
  };
  DispatchedTask.prototype.cancelCompletedResult_1 = function (takenState, cause) {
  };
  DispatchedTask.prototype.getSuccessfulResult_1 = function (state) {
    return (state == null ? true : isObject(state)) ? state : THROW_CCE();
  };
  DispatchedTask.prototype.getExceptionalResult_1 = function (state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._cause;
  };
  DispatchedTask.prototype.run_3 = function () {
    var taskContext = _get_taskContext_(this);
    var fatalException = null;
    try {
      var tmp = this._get_delegate__1();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate._continuation_0;
      var tmp0_withContinuationContext_0 = delegate._countOrElement;
      var context_2 = continuation._get_context__8();
      var state_3 = this.takeState_1();
      var exception_4 = this.getExceptionalResult_1(state_3);
      var job_5 = (exception_4 == null ? _get_isCancellableMode_(this._resumeMode) : false) ? context_2.get_31(Key_getInstance_2()) : null;
      if (!(job_5 == null) ? !job_5._get_isActive__15() : false) {
        var cause_6 = job_5.getCancellationException_3();
        this.cancelCompletedResult_1(state_3, cause_6);
        var tmp0_failure_0_7 = Companion_getInstance_2();
        var tmp1_failure_0_8 = recoverStackTrace(cause_6, continuation);
        continuation.resumeWith_8(_Result___init__impl_(createFailure(tmp1_failure_0_8)));
      } else {
        if (!(exception_4 == null)) {
          var tmp0_failure_0_1_9 = Companion_getInstance_2();
          continuation.resumeWith_8(_Result___init__impl_(createFailure(exception_4)));
        } else {
          var tmp2_resume_0_10 = this.getSuccessfulResult_1(state_3);
          var tmp0_success_0_1_11 = Companion_getInstance_2();
          continuation.resumeWith_8(_Result___init__impl_(tmp2_resume_0_10));
        }
      }
    } catch ($p) {
      if ($p instanceof Error) {
        fatalException = $p;
      } else {
        {
          throw $p;
        }
      }
    }
    finally {
      var tmp_0;
      try {
        var tmp0_success_0_1 = Companion_getInstance_2();
        var tmp1_success_0_2 = Unit_getInstance();
        tmp_0 = _Result___init__impl_(Unit_getInstance());
      } catch ($p_0) {
        var tmp_1;
        if ($p_0 instanceof Error) {
          var tmp2_failure_0_4 = Companion_getInstance_2();
          tmp_1 = _Result___init__impl_(createFailure($p_0));
        } else {
          {
            throw $p_0;
          }
        }
        tmp_0 = tmp_1;
      }
      var result = tmp_0;
      this.handleFatalException_1(fatalException, Result__exceptionOrNull_impl(result));
    }
  };
  DispatchedTask.prototype.handleFatalException_1 = function (exception, finallyException) {
    if (exception === null ? finallyException === null : false)
      return Unit_getInstance();
    if (!(exception === null) ? !(finallyException === null) : false) {
    }var tmp0_elvis_lhs = exception;
    var cause = tmp0_elvis_lhs == null ? finallyException : tmp0_elvis_lhs;
    var reason = new CoroutinesInternalError('' + 'Fatal exception in coroutines machinery for ' + this + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", ensureNotNull(cause));
    handleCoroutineException(this._get_delegate__1()._get_context__8(), reason);
  };
  DispatchedTask.$metadata$ = {
    simpleName: 'DispatchedTask',
    kind: 'class',
    interfaces: []
  };
  function _get_isReusableMode_(_this_) {
    return _this_ === 2;
  }
  function _get_isCancellableMode_(_this_) {
    return _this_ === 1 ? true : _this_ === 2;
  }
  function dispatch(_this_, mode) {
    var delegate = _this_._get_delegate__1();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = _get_isCancellableMode_(mode) === _get_isCancellableMode_(_this_._resumeMode);
    } else {
      {
        tmp = false;
      }
    }
    if (tmp) {
      var dispatcher = delegate._dispatcher;
      var context = delegate._get_context__8();
      if (dispatcher.isDispatchNeeded_8(context)) {
        dispatcher.dispatch_8(context, _this_);
      } else {
        resumeUnconfined(_this_);
      }
    } else {
      {
        resume(_this_, delegate, undispatched);
      }
    }
  }
  function resumeUnconfined(_this_) {
    var eventLoop = ThreadLocalEventLoop_getInstance()._get_eventLoop_();
    if (eventLoop._get_isUnconfinedLoopActive__0()) {
      eventLoop.dispatchUnconfined_0(_this_);
    } else {
      eventLoop.incrementUseCount_0(true);
      try {
        resume(_this_, _this_._get_delegate__1(), true);
        $l$break: while (true) {
          if (!eventLoop.processUnconfinedEvent_0())
            break $l$break;
        }
      } catch ($p) {
        if ($p instanceof Error) {
          _this_.handleFatalException_1($p, null);
        } else {
          {
            throw $p;
          }
        }
      }
      finally {
        eventLoop.decrementUseCount_0(true);
      }
    }
  }
  function resume(_this_, delegate, undispatched) {
    var state = _this_.takeState_1();
    var exception = _this_.getExceptionalResult_1(state);
    var tmp;
    if (!(exception == null)) {
      var tmp0_failure_0 = Companion_getInstance_2();
      tmp = _Result___init__impl_(createFailure(exception));
    } else {
      var tmp1_success_0 = Companion_getInstance_2();
      var tmp2_success_0 = _this_.getSuccessfulResult_1(state);
      tmp = _Result___init__impl_(tmp2_success_0);
    }
    var result = tmp;
    if (undispatched) {
      var tmp3_resumeUndispatchedWith_0 = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      var tmp0_withContinuationContext_0_1 = tmp3_resumeUndispatchedWith_0._continuation_0;
      var tmp1_withContinuationContext_0_2 = tmp3_resumeUndispatchedWith_0._countOrElement;
      tmp3_resumeUndispatchedWith_0._continuation_0.resumeWith_8(result);
    } else
      delegate.resumeWith_8(result);
  }
  function Symbol(symbol) {
    this._symbol = symbol;
  }
  Symbol.prototype.toString = function () {
    return '' + '<' + this._symbol + '>';
  };
  Symbol.$metadata$ = {
    simpleName: 'Symbol',
    kind: 'class',
    interfaces: []
  };
  function startCoroutineCancellable(_this_, receiver, completion, onCancellation) {
    var tmp;
    try {
      var tmp_0 = intercepted(createCoroutineUnintercepted(_this_, receiver, completion));
      var tmp0_success_0_3 = Companion_getInstance_2();
      var tmp1_success_0_4 = Unit_getInstance();
      tmp = resumeCancellableWith(tmp_0, _Result___init__impl_(Unit_getInstance()), onCancellation);
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var tmp0_failure_0 = Companion_getInstance_2();
        tmp_1 = completion.resumeWith_8(_Result___init__impl_(createFailure($p)));
      } else {
        {
          throw $p;
        }
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function startCoroutineCancellable$default(_this_, receiver, completion, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      onCancellation = null;
    return startCoroutineCancellable(_this_, receiver, completion, onCancellation);
  }
  function startCoroutineCancellable_0(_this_, fatalCompletion) {
    var tmp;
    try {
      var tmp_0 = intercepted(_this_);
      var tmp0_success_0_4 = Companion_getInstance_2();
      var tmp1_success_0_5 = Unit_getInstance();
      var tmp_1 = _Result___init__impl_(Unit_getInstance());
      tmp = resumeCancellableWith$default(tmp_0, tmp_1, null, 2, null);
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Error) {
        var tmp0_failure_0_2 = Companion_getInstance_2();
        tmp_2 = fatalCompletion.resumeWith_8(_Result___init__impl_(createFailure($p)));
      } else {
        {
          throw $p;
        }
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function startCoroutineUndispatched(_this_, receiver, completion) {
    var tmp$ret$0;
    l$ret$1: do {
      var actualCompletion_1 = completion;
      var tmp;
      try {
        var tmp0_withCoroutineContext_0_8 = completion._get_context__8();
        var tmp1_withCoroutineContext_0_9 = null;
        tmp = _this_(receiver, actualCompletion_1);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var tmp0_failure_0_1_4 = Companion_getInstance_2();
          actualCompletion_1.resumeWith_8(_Result___init__impl_(createFailure($p)));
          tmp$ret$0 = Unit_getInstance();
          break l$ret$1;
        } else {
          {
            throw $p;
          }
        }
        tmp = tmp_0;
      }
      var value_2 = tmp;
      if (!(value_2 === _get_COROUTINE_SUSPENDED_())) {
        var tmp0_resume_0_5 = (value_2 == null ? true : isObject(value_2)) ? value_2 : THROW_CCE();
        var tmp0_success_0_1_6 = Companion_getInstance_2();
        actualCompletion_1.resumeWith_8(_Result___init__impl_(tmp0_resume_0_5));
      }}
     while (false);
  }
  function SelectClause0() {
  }
  SelectClause0.$metadata$ = {
    simpleName: 'SelectClause0',
    kind: 'interface',
    interfaces: []
  };
  function CompletionHandlerBase() {
    LinkedListNode.call(this);
  }
  CompletionHandlerBase.$metadata$ = {
    simpleName: 'CompletionHandlerBase',
    kind: 'class',
    interfaces: []
  };
  function invokeIt(_this_, cause) {
    var tmp0_subject = typeof _this_;
    if (tmp0_subject === 'function')
      _this_(cause);
    else {
      _this_.invoke(cause);
    }
  }
  function CancelHandlerBase() {
  }
  CancelHandlerBase.$metadata$ = {
    simpleName: 'CancelHandlerBase',
    kind: 'class',
    interfaces: []
  };
  function toDebugString(_this_) {
    return toString_1(_this_);
  }
  function newCoroutineContext(_this_, context) {
    var combined = _this_._get_coroutineContext__3().plus_17(context);
    return (!(combined === Dispatchers_getInstance()._Default) ? combined.get_31(Key_getInstance()) == null : false) ? combined.plus_17(Dispatchers_getInstance()._Default) : combined;
  }
  function _get_DefaultDelay_() {
    var tmp = Dispatchers_getInstance()._Default;
    return isInterface(tmp, Delay) ? tmp : THROW_CCE();
  }
  function _get_coroutineName_(_this_) {
    return null;
  }
  function createDefaultDispatcher() {
    var tmp;
    if ((!(typeof navigator === 'undefined') ? navigator != null : false) ? navigator.product == 'ReactNative' : false) {
      tmp = NodeDispatcher_getInstance();
    } else {
      if (isJsdom()) {
        tmp = NodeDispatcher_getInstance();
      } else {
        var tmp_0;
        var tmp_1;
        if (!(typeof window === 'undefined')) {
          var tmp0_asDynamic_0 = window;
          tmp_1 = tmp0_asDynamic_0 != null;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          var tmp1_asDynamic_0 = window;
          tmp_0 = !(typeof tmp1_asDynamic_0.addEventListener === 'undefined');
        } else {
          {
            tmp_0 = false;
          }
        }
        if (tmp_0) {
          tmp = asCoroutineDispatcher(window);
        } else {
          if (typeof process === 'undefined') {
            tmp = SetTimeoutDispatcher_getInstance();
          } else {
            {
              tmp = NodeDispatcher_getInstance();
            }
          }
        }
      }
    }
    return tmp;
  }
  function isJsdom() {
    return ((((!(typeof navigator === 'undefined') ? navigator != null : false) ? navigator.userAgent != null : false) ? !(typeof navigator.userAgent === 'undefined') : false) ? !(typeof navigator.userAgent.match === 'undefined') : false) ? navigator.userAgent.match('\\bjsdom\\b') : false;
  }
  function handleCoroutineExceptionImpl(context, exception) {
    (function () {
      var $externalVarargReceiverTmp = console;
      return $externalVarargReceiverTmp.error.apply($externalVarargReceiverTmp, [].concat([exception]));
    }.call(this));
  }
  var counter;
  var DEBUG;
  function _get_classSimpleName_(_this_) {
    var tmp0_elvis_lhs = getKClassFromExpression_0(_this_)._get_simpleName__4();
    return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
  }
  function _get_hexAddress_(_this_) {
    var result = _this_.__debug_counter;
    if (!(typeof result === 'number')) {
      counter = counter + 1 | 0;
      result = counter;
      _this_.__debug_counter = result;
    }return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this._Default = createDefaultDispatcher();
    this._Main = new JsMainDispatcher(this._Default, false);
    this._Unconfined = Unconfined_getInstance();
  }
  Dispatchers.$metadata$ = {
    simpleName: 'Dispatchers',
    kind: 'object',
    interfaces: []
  };
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this._delegate_0 = delegate;
    this._invokeImmediately = invokeImmediately;
    this._immediate = this._invokeImmediately ? this : new JsMainDispatcher(this._delegate_0, true);
  }
  JsMainDispatcher.prototype._get_immediate__0 = function () {
    return this._immediate;
  };
  JsMainDispatcher.prototype.isDispatchNeeded_8 = function (context) {
    return !this._invokeImmediately;
  };
  JsMainDispatcher.prototype.dispatch_8 = function (context, block) {
    return this._delegate_0.dispatch_8(context, block);
  };
  JsMainDispatcher.prototype.toString = function () {
    var tmp0_elvis_lhs = this.toStringInternalImpl_0();
    return tmp0_elvis_lhs == null ? this._delegate_0.toString() : tmp0_elvis_lhs;
  };
  JsMainDispatcher.$metadata$ = {
    simpleName: 'JsMainDispatcher',
    kind: 'class',
    interfaces: []
  };
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  UnconfinedEventLoop.prototype.dispatch_8 = function (context, block) {
    unsupported();
  };
  UnconfinedEventLoop.$metadata$ = {
    simpleName: 'UnconfinedEventLoop',
    kind: 'class',
    interfaces: []
  };
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$_0('runBlocking event loop is not supported');
  }
  function JobCancellationException(message, cause, job) {
    CancellationException.call(this, message, cause);
    this._job_0 = job;
    captureStack(this, JobCancellationException);
  }
  JobCancellationException.prototype.toString = function () {
    return '' + CancellationException.prototype.toString.call(this) + '; job=' + this._job_0;
  };
  JobCancellationException.prototype.equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (other instanceof JobCancellationException) {
        tmp_2 = other.message == this.message;
      } else {
        {
          tmp_2 = false;
        }
      }
      if (tmp_2) {
        tmp_1 = equals_0(other._job_0, this._job_0);
      } else {
        {
          tmp_1 = false;
        }
      }
      if (tmp_1) {
        tmp_0 = equals_0(other.cause, this.cause);
      } else {
        {
          tmp_0 = false;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  JobCancellationException.prototype.hashCode = function () {
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this._job_0) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  JobCancellationException.$metadata$ = {
    simpleName: 'JobCancellationException',
    kind: 'class',
    interfaces: []
  };
  function CancellationException_init_$Init$(message, $this) {
    CancellationException.call($this, message, null);
    return $this;
  }
  function CancellationException_init_$Create$(message) {
    var tmp = CancellationException_init_$Init$(message, Object.create(CancellationException.prototype));
    captureStack(tmp, CancellationException_init_$Create$);
    return tmp;
  }
  function CancellationException(message, cause) {
    IllegalStateException_init_$Init$_0(message, cause, this);
    captureStack(this, CancellationException);
  }
  CancellationException.$metadata$ = {
    simpleName: 'CancellationException',
    kind: 'class',
    interfaces: []
  };
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  NodeDispatcher.prototype.scheduleQueueProcessing_1 = function () {
    process.nextTick(this._get_messageQueue__1()._processQueue);
  };
  NodeDispatcher.$metadata$ = {
    simpleName: 'NodeDispatcher',
    kind: 'object',
    interfaces: []
  };
  var NodeDispatcher_instance;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance == null)
      new NodeDispatcher();
    return NodeDispatcher_instance;
  }
  function SetTimeoutDispatcher() {
    SetTimeoutDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  SetTimeoutDispatcher.prototype.scheduleQueueProcessing_1 = function () {
    setTimeout(this._get_messageQueue__1()._processQueue, 0);
    Unit_getInstance();
  };
  SetTimeoutDispatcher.$metadata$ = {
    simpleName: 'SetTimeoutDispatcher',
    kind: 'object',
    interfaces: []
  };
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function _no_name_provided__37(this$0) {
    this._this$0_6 = this$0;
  }
  _no_name_provided__37.prototype.invoke_70 = function () {
    this._this$0_6.process_1();
  };
  _no_name_provided__37.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function ScheduledMessageQueue($outer) {
    this._$this_1 = $outer;
    MessageQueue.call(this);
    var tmp = this;
    tmp._processQueue = _no_name_provided_$factory_29(this);
  }
  ScheduledMessageQueue.prototype.schedule_1 = function () {
    this._$this_1.scheduleQueueProcessing_1();
  };
  ScheduledMessageQueue.prototype.reschedule_1 = function () {
    setTimeout(this._processQueue, 0);
    Unit_getInstance();
  };
  ScheduledMessageQueue.$metadata$ = {
    simpleName: 'ScheduledMessageQueue',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__38($continuation, this$0) {
    this._$continuation = $continuation;
    this._this$0_7 = this$0;
  }
  _no_name_provided__38.prototype.invoke_70 = function () {
    this._$continuation.resumeUndispatched_0(this._this$0_7, Unit_getInstance());
  };
  _no_name_provided__38.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this._messageQueue = new ScheduledMessageQueue(this);
  }
  SetTimeoutBasedDispatcher.prototype._get_messageQueue__1 = function () {
    return this._messageQueue;
  };
  SetTimeoutBasedDispatcher.prototype.dispatch_8 = function (context, block) {
    this._messageQueue.enqueue_1(block);
  };
  SetTimeoutBasedDispatcher.prototype.scheduleResumeAfterDelay_3 = function (timeMillis, continuation) {
    var handle = setTimeout(_no_name_provided_$factory_30(continuation, this), delayToInt(timeMillis));
    var tmp0__get_asHandler__0 = new ClearTimeout(handle);
    continuation.invokeOnCancellation_0(tmp0__get_asHandler__0);
  };
  SetTimeoutBasedDispatcher.$metadata$ = {
    simpleName: 'SetTimeoutBasedDispatcher',
    kind: 'class',
    interfaces: [Delay]
  };
  function MessageQueue() {
    ArrayQueue.call(this);
    this._yieldEvery = 16;
    this._scheduled = false;
  }
  MessageQueue.prototype.enqueue_1 = function (element) {
    this.addLast_7(element);
    if (!this._scheduled) {
      this._scheduled = true;
      this.schedule_1();
    }};
  MessageQueue.prototype.process_1 = function () {
    try {
      var tmp0_repeat_0 = this._yieldEvery;
      var inductionVariable = 0;
      if (inductionVariable < tmp0_repeat_0)
        do {
          var index_2 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp0_elvis_lhs_5 = this.removeFirstOrNull_2();
          var tmp;
          if (tmp0_elvis_lhs_5 == null) {
            return Unit_getInstance();
          } else {
            tmp = tmp0_elvis_lhs_5;
          }
          var element_4 = tmp;
          element_4.run_3();
        }
         while (inductionVariable < tmp0_repeat_0);
    }finally {
      if (this._get_isEmpty__2()) {
        this._scheduled = false;
      } else {
        this.reschedule_1();
      }
    }
  };
  MessageQueue.$metadata$ = {
    simpleName: 'MessageQueue',
    kind: 'class',
    interfaces: []
  };
  function delayToInt(timeMillis) {
    return coerceIn_0(timeMillis, new Long(0, 0), new Long(2147483647, 0)).toInt_5();
  }
  function ClearTimeout(handle) {
    CancelHandler.call(this);
    this._handle = handle;
  }
  ClearTimeout.prototype.dispose_9 = function () {
    clearTimeout(this._handle);
  };
  ClearTimeout.prototype.invoke_69 = function (cause) {
    this.dispose_9();
  };
  ClearTimeout.prototype.invoke = function (cause) {
    return this.invoke_69(cause);
  };
  ClearTimeout.prototype.toString = function () {
    return '' + 'ClearTimeout[' + this._handle + ']';
  };
  ClearTimeout.$metadata$ = {
    simpleName: 'ClearTimeout',
    kind: 'class',
    interfaces: [DisposableHandle]
  };
  function _no_name_provided__39($continuation, this$0) {
    this._$continuation_0 = $continuation;
    this._this$0_8 = this$0;
  }
  _no_name_provided__39.prototype.invoke_70 = function () {
    this._$continuation_0.resumeUndispatched_0(this._this$0_8, Unit_getInstance());
  };
  _no_name_provided__39.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this._window = window_0;
    this._queue = new WindowMessageQueue(this._window);
  }
  WindowDispatcher.prototype.dispatch_8 = function (context, block) {
    return this._queue.enqueue_1(block);
  };
  WindowDispatcher.prototype.scheduleResumeAfterDelay_3 = function (timeMillis, continuation) {
    (function () {
      var $externalVarargReceiverTmp = this._window;
      return $externalVarargReceiverTmp.setTimeout.apply($externalVarargReceiverTmp, [_no_name_provided_$factory_31(continuation, this), delayToInt(timeMillis)]);
    }.call(this));
    Unit_getInstance();
  };
  WindowDispatcher.$metadata$ = {
    simpleName: 'WindowDispatcher',
    kind: 'class',
    interfaces: [Delay]
  };
  function _no_name_provided__40(this$0) {
    this._this$0_9 = this$0;
  }
  _no_name_provided__40.prototype.invoke_71 = function (event) {
    if (event.source == this._this$0_9._window_0 ? event.data == this._this$0_9._messageName : false) {
      event.stopPropagation();
      this._this$0_9.process_1();
    }};
  _no_name_provided__40.prototype.invoke_84 = function (p1) {
    this.invoke_71((p1 == null ? true : p1) ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__40.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__41(this$0) {
    this._this$0_10 = this$0;
  }
  _no_name_provided__41.prototype.invoke_73 = function (it) {
    this._this$0_10.process_1();
  };
  _no_name_provided__41.prototype.invoke_84 = function (p1) {
    this.invoke_73(p1 instanceof Unit ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__41.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this._window_0 = window_0;
    this._messageName = 'dispatchCoroutine';
    this._window_0.addEventListener('message', _no_name_provided_$factory_32(this), true);
  }
  WindowMessageQueue.prototype.schedule_1 = function () {
    var tmp = Promise.resolve(Unit_getInstance());
    tmp.then(_no_name_provided_$factory_33(this));
    Unit_getInstance();
  };
  WindowMessageQueue.prototype.reschedule_1 = function () {
    this._window_0.postMessage(this._messageName, '*');
  };
  WindowMessageQueue.$metadata$ = {
    simpleName: 'WindowMessageQueue',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_29(this$0) {
    var i = new _no_name_provided__37(this$0);
    return function () {
      i.invoke_70();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_30($continuation, this$0) {
    var i = new _no_name_provided__38($continuation, this$0);
    return function () {
      i.invoke_70();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_31($continuation, this$0) {
    var i = new _no_name_provided__39($continuation, this$0);
    return function () {
      i.invoke_70();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_32(this$0) {
    var i = new _no_name_provided__40(this$0);
    return function (p1) {
      i.invoke_71(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_33(this$0) {
    var i = new _no_name_provided__41(this$0);
    return function (p1) {
      i.invoke_73(p1);
      return Unit_getInstance();
    };
  }
  function await_0(_this_, $cont) {
    var tmp0__anonymous__1_1 = $cont;
    var cancellable_2_2 = new CancellableContinuationImpl(intercepted(tmp0__anonymous__1_1), 1);
    cancellable_2_2.initCancellability();
    var tmp = _no_name_provided_$factory_34(cancellable_2_2);
    _this_.then(tmp, _no_name_provided_$factory_35(cancellable_2_2));
    Unit_getInstance();
    return cancellable_2_2.getResult();
  }
  function _no_name_provided__42($cancellable_2_2) {
    this._$cancellable_2_2 = $cancellable_2_2;
  }
  _no_name_provided__42.prototype.invoke_75 = function (it) {
    var tmp0_success_0_1_5 = Companion_getInstance_2();
    this._$cancellable_2_2.resumeWith_8(_Result___init__impl_(it));
  };
  _no_name_provided__42.prototype.invoke_84 = function (p1) {
    this.invoke_75((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__42.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__43($cancellable_2_2) {
    this._$cancellable_2_2_0 = $cancellable_2_2;
  }
  _no_name_provided__43.prototype.invoke_77 = function (it) {
    var tmp0_failure_0_1_7 = Companion_getInstance_2();
    this._$cancellable_2_2_0.resumeWith_8(_Result___init__impl_(createFailure(it)));
  };
  _no_name_provided__43.prototype.invoke_84 = function (p1) {
    this.invoke_77(p1 instanceof Error ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__43.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_34($cancellable_2_2) {
    var i = new _no_name_provided__42($cancellable_2_2);
    return function (p1) {
      i.invoke_75(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_35($cancellable_2_2) {
    var i = new _no_name_provided__43($cancellable_2_2);
    return function (p1) {
      i.invoke_77(p1);
      return Unit_getInstance();
    };
  }
  function Runnable() {
  }
  Runnable.$metadata$ = {
    simpleName: 'Runnable',
    kind: 'interface',
    interfaces: []
  };
  function SchedulerTask() {
  }
  SchedulerTask.$metadata$ = {
    simpleName: 'SchedulerTask',
    kind: 'class',
    interfaces: [Runnable]
  };
  function _get_taskContext_(_this_) {
    return Unit_getInstance();
  }
  function asCoroutineDispatcher(_this_) {
    var tmp0_elvis_lhs = _this_.coroutineDispatcher;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_also_0 = new WindowDispatcher(_this_);
      _this_.coroutineDispatcher = tmp0_also_0;
      tmp = tmp0_also_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function LinkedListHead() {
    LinkedListNode.call(this);
  }
  LinkedListHead.$metadata$ = {
    simpleName: 'LinkedListHead',
    kind: 'class',
    interfaces: []
  };
  function LinkedListNode() {
    this.__next = this;
    this.__prev = this;
    this.__removed = false;
  }
  LinkedListNode.prototype._get__next__1 = function () {
    return this.__next;
  };
  LinkedListNode.prototype.addLast_13 = function (node) {
    var prev = this.__prev;
    node.__next = this;
    node.__prev = prev;
    prev.__next = node;
    this.__prev = node;
  };
  LinkedListNode.prototype.remove_7 = function () {
    if (this.__removed)
      return false;
    var prev = this.__prev;
    var next = this.__next;
    prev.__next = next;
    next.__prev = prev;
    this.__removed = true;
    return true;
  };
  LinkedListNode.prototype.addOneIfEmpty_6 = function (node) {
    if (!(this.__next === this))
      return false;
    this.addLast_13(node);
    return true;
  };
  LinkedListNode.$metadata$ = {
    simpleName: 'LinkedListNode',
    kind: 'class',
    interfaces: []
  };
  function unwrap(exception) {
    return exception;
  }
  function CoroutineStackFrame() {
  }
  CoroutineStackFrame.$metadata$ = {
    simpleName: 'CoroutineStackFrame',
    kind: 'interface',
    interfaces: []
  };
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function threadContextElements(context) {
    return 0;
  }
  function CommonThreadLocal() {
    this._value_3 = null;
  }
  CommonThreadLocal.prototype.get_32 = function () {
    var tmp = this._value_3;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  CommonThreadLocal.prototype.set_0 = function (value) {
    this._value_3 = value;
  };
  CommonThreadLocal.$metadata$ = {
    simpleName: 'CommonThreadLocal',
    kind: 'class',
    interfaces: []
  };
  function main() {
    var tmp = GlobalScope_getInstance();
    launch$default(tmp, null, null, _no_name_provided_$factory_36(null), 3, null);
    Unit_getInstance();
  }
  function _no_name_provided__44() {
  }
  _no_name_provided__44.prototype.invoke_81 = function (it) {
    return it.properties;
  };
  _no_name_provided__44.prototype.invoke_84 = function (p1) {
    return this.invoke_81((p1 == null ? true : p1) ? p1 : THROW_CCE());
  };
  _no_name_provided__44.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__45() {
  }
  _no_name_provided__45.prototype.invoke_81 = function (it) {
    return it.appointments_available == 'true';
  };
  _no_name_provided__45.prototype.invoke_84 = function (p1) {
    return this.invoke_81((p1 == null ? true : p1) ? p1 : THROW_CCE());
  };
  _no_name_provided__45.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__46() {
  }
  _no_name_provided__46.prototype.invoke_83 = function (_name_for_destructuring_parameter_0_) {
    var a_19 = _name_for_destructuring_parameter_0_.component1();
    return a_19;
  };
  _no_name_provided__46.prototype.invoke_84 = function (p1) {
    return this.invoke_83(p1 instanceof Pair ? p1 : THROW_CCE());
  };
  _no_name_provided__46.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__47(resultContinuation) {
    CoroutineImpl_0.call(this, resultContinuation);
  }
  _no_name_provided__47.prototype.invoke_85 = function ($this$launch, $cont) {
    var tmp = this.create($this$launch, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_1();
  };
  _no_name_provided__47.prototype.doResume_1 = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 5;
            this._state_0 = 1;
            continue $sm;
          case 1:
            if (false) {
              this._state_0 = 6;
              continue $sm;
            }
            this._state_0 = 2;
            var tmp0_headers = json([to('accept', '*/*'), to('accept-language', 'en-US,en-GB;q=0.9,en;q=0.8'), to('if-modified-since', 'Sun, 28 Mar 2021 19:23:01 GMT'), to('if-none-match', 'W/"431c895b3326f952124205fe4051dd08"'), to('sec-fetch-dest', 'empty'), to('sec-fetch-mode', 'cors'), to('sec-fetch-site', 'same-origin'), to('sec-gpc', '1'), to('cookie', '__cfduid=dbc2e6f634d64033ebf1041688acfd4981616959422')]);
            var tmp0__get_CORS__0 = null;
            var tmp0_asDynamic_0_2 = 'cors';
            var tmp1_unsafeCast_0_1 = tmp0_asDynamic_0_2;
            var tmp1_mode = tmp1_unsafeCast_0_1;
            var tmp1_RequestInit_0 = 'GET';
            var tmp2_RequestInit_0 = null;
            var tmp3_RequestInit_0 = 'https://www.vaccinespotter.org/MN/?zip=55422&radius=25';
            var tmp4_RequestInit_0 = 'strict-origin-when-cross-origin';
            var tmp5_RequestInit_0 = undefined;
            var tmp6_RequestInit_0 = undefined;
            var tmp7_RequestInit_0 = undefined;
            var tmp8_RequestInit_0 = undefined;
            var tmp9_RequestInit_0 = undefined;
            var tmp10_RequestInit_0 = undefined;
            var o_1 = {};
            o_1['method'] = tmp1_RequestInit_0;
            o_1['headers'] = tmp0_headers;
            o_1['body'] = tmp2_RequestInit_0;
            o_1['referrer'] = tmp3_RequestInit_0;
            o_1['referrerPolicy'] = tmp4_RequestInit_0;
            o_1['mode'] = tmp1_mode;
            o_1['credentials'] = tmp5_RequestInit_0;
            o_1['cache'] = tmp6_RequestInit_0;
            o_1['redirect'] = tmp7_RequestInit_0;
            o_1['integrity'] = tmp8_RequestInit_0;
            o_1['keepalive'] = tmp9_RequestInit_0;
            o_1['window'] = tmp10_RequestInit_0;
            suspendResult = await_0(fetch('https://www.vaccinespotter.org/api/v0/states/MN.json', o_1), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 2:
            this._ARGUMENT0 = suspendResult;
            this._ARGUMENT1 = this._ARGUMENT0.json();
            this._state_0 = 3;
            suspendResult = await_0(this._ARGUMENT1, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 3:
            this._response2 = suspendResult;
            var tmp_0 = this;
            var tmp11_unsafeCast_0 = this._response2.features;
            var tmp_1 = asSequence(tmp11_unsafeCast_0);
            var tmp_2 = map(tmp_1, _no_name_provided_$factory_37());
            tmp_0._tmp12_forEach_03 = filter(tmp_2, _no_name_provided_$factory_38());
            var tmp0_iterator_1 = this._tmp12_forEach_03.iterator_34();
            while (tmp0_iterator_1.hasNext_10()) {
              var element_2 = tmp0_iterator_1.next_10();
              var tmp3_RequestInit_0_4 = 'POST';
              var tmp4_RequestInit_0_5 = json([to('Content-type', 'application/json')]);
              var tmp_3 = element_2.name;
              var tmp_4 = element_2.address;
              var tmp0_unsafeCast_0_9 = element_2.appointment_vaccine_types;
              var tmp1_flatMap_0_8 = tmp0_unsafeCast_0_9;
              var tmp0_flatMapTo_0_1_10 = ArrayList_init_$Create$();
              var indexedObject = tmp1_flatMap_0_8;
              var inductionVariable = 0;
              var last = indexedObject.length;
              while (inductionVariable < last) {
                var element_2_3_12 = indexedObject[inductionVariable];
                inductionVariable = inductionVariable + 1 | 0;
                var list_3_4_13 = toList(element_2_3_12);
                addAll(tmp0_flatMapTo_0_1_10, list_3_4_13);
                Unit_getInstance();
              }
              var tmp2_filter_0_7 = tmp0_flatMapTo_0_1_10;
              var tmp0_filterTo_0_1_14 = ArrayList_init_$Create$();
              var tmp0_iterator_1_2_15 = tmp2_filter_0_7.iterator_34();
              while (tmp0_iterator_1_2_15.hasNext_10()) {
                var element_2_3_16 = tmp0_iterator_1_2_15.next_10();
                var b_5_17 = element_2_3_16.component2();
                if (b_5_17) {
                  tmp0_filterTo_0_1_14.add_13(element_2_3_16);
                  Unit_getInstance();
                } else {
                }
              }
              var tmp5_RequestInit_0_6 = json([to('content', trimIndent('' + '\n                        Vaccine Available at:\n                        ' + tmp_3 + '\n                        ' + tmp_4 + '\n                        ' + joinToString$default_0(tmp0_filterTo_0_1_14, null, null, null, 0, null, _no_name_provided_$factory_39(), 31, null) + '\n                    '))]);
              var tmp6_RequestInit_0_20 = undefined;
              var tmp7_RequestInit_0_21 = undefined;
              var tmp8_RequestInit_0_22 = undefined;
              var tmp9_RequestInit_0_23 = undefined;
              var tmp10_RequestInit_0_24 = undefined;
              var tmp11_RequestInit_0_25 = undefined;
              var tmp12_RequestInit_0_26 = undefined;
              var tmp13_RequestInit_0_27 = undefined;
              var tmp14_RequestInit_0_28 = undefined;
              var o_1_29 = {};
              o_1_29['method'] = tmp3_RequestInit_0_4;
              o_1_29['headers'] = tmp4_RequestInit_0_5;
              o_1_29['body'] = tmp5_RequestInit_0_6;
              o_1_29['referrer'] = tmp6_RequestInit_0_20;
              o_1_29['referrerPolicy'] = tmp7_RequestInit_0_21;
              o_1_29['mode'] = tmp8_RequestInit_0_22;
              o_1_29['credentials'] = tmp9_RequestInit_0_23;
              o_1_29['cache'] = tmp10_RequestInit_0_24;
              o_1_29['redirect'] = tmp11_RequestInit_0_25;
              o_1_29['integrity'] = tmp12_RequestInit_0_26;
              o_1_29['keepalive'] = tmp13_RequestInit_0_27;
              o_1_29['window'] = tmp14_RequestInit_0_28;
              fetch('https://discord.com/api/webhooks/819982666996383795/IvZGdbXVaDtNd2EUDuRJ6pNEvAr1cqLAcqclSJW4RLvm4zFz83EOXMwJzk5WbPDPdmwj', o_1_29);
              Unit_getInstance();
            }

            this._state_0 = 4;
            suspendResult = delay(new Long(60000, 0), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 4:
            suspendResult;
            this._state_0 = 1;
            continue $sm;
          case 5:
            throw this._exception_0;
          case 6:
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this._exceptionState === 5) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  _no_name_provided__47.prototype.create = function ($this$launch, completion) {
    var i = new _no_name_provided__47(completion);
    i._$this$launch = $this$launch;
    return i;
  };
  _no_name_provided__47.$metadata$ = {
    kind: 'class',
    interfaces: [],
    suspendArity: 1
  };
  function _no_name_provided_$factory_36(resultContinuation) {
    var i = new _no_name_provided__47(resultContinuation);
    var l = function (p1, $cont) {
      return i.invoke_85(p1, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function _no_name_provided_$factory_37() {
    var i = new _no_name_provided__44();
    return function (p1) {
      return i.invoke_81(p1);
    };
  }
  function _no_name_provided_$factory_38() {
    var i = new _no_name_provided__45();
    return function (p1) {
      return i.invoke_81(p1);
    };
  }
  function _no_name_provided_$factory_39() {
    var i = new _no_name_provided__46();
    return function (p1) {
      return i.invoke_83(p1);
    };
  }
  AbstractMap.prototype._get_entries__2 = Map_0.prototype._get_entries__2;
  CombinedContext.prototype.plus_17 = CoroutineContext.prototype.plus_17;
  AbstractCoroutineContextElement.prototype.get_31 = Element_0.prototype.get_31;
  AbstractCoroutineContextElement.prototype.fold_17 = Element_0.prototype.fold_17;
  AbstractCoroutineContextElement.prototype.minusKey_18 = Element_0.prototype.minusKey_18;
  AbstractCoroutineContextElement.prototype.plus_17 = CoroutineContext.prototype.plus_17;
  IntIterator.prototype.hasNext_10 = Iterator.prototype.hasNext_10;
  AbstractMutableList.prototype.get_42 = List.prototype.get_42;
  AbstractMutableMap.prototype._get_entries__2 = MutableMap.prototype._get_entries__2;
  InternalHashCodeMap.prototype.createJsMap_0 = InternalMap.prototype.createJsMap_0;
  KClassImpl.prototype._get_simpleName__4 = KClass.prototype._get_simpleName__4;
  JobSupport.prototype.invokeOnCompletion$default_3 = Job.prototype.invokeOnCompletion$default_3;
  JobSupport.prototype.plus_17 = CoroutineContext.prototype.plus_17;
  JobSupport.prototype.get_31 = Element_0.prototype.get_31;
  JobSupport.prototype.fold_17 = Element_0.prototype.fold_17;
  JobSupport.prototype.minusKey_18 = Element_0.prototype.minusKey_18;
  AbstractCoroutine.prototype.invokeOnCompletion$default_3 = Job.prototype.invokeOnCompletion$default_3;
  AbstractCoroutine.prototype.plus_17 = CoroutineContext.prototype.plus_17;
  AbstractCoroutine.prototype.get_31 = Element_0.prototype.get_31;
  AbstractCoroutine.prototype.fold_17 = Element_0.prototype.fold_17;
  AbstractCoroutine.prototype.minusKey_18 = Element_0.prototype.minusKey_18;
  StandaloneCoroutine.prototype.invokeOnCompletion$default_3 = Job.prototype.invokeOnCompletion$default_3;
  StandaloneCoroutine.prototype.plus_17 = CoroutineContext.prototype.plus_17;
  StandaloneCoroutine.prototype.get_31 = Element_0.prototype.get_31;
  StandaloneCoroutine.prototype.fold_17 = Element_0.prototype.fold_17;
  StandaloneCoroutine.prototype.minusKey_18 = Element_0.prototype.minusKey_18;
  LazyStandaloneCoroutine.prototype.invokeOnCompletion$default_3 = Job.prototype.invokeOnCompletion$default_3;
  LazyStandaloneCoroutine.prototype.plus_17 = CoroutineContext.prototype.plus_17;
  LazyStandaloneCoroutine.prototype.get_31 = Element_0.prototype.get_31;
  LazyStandaloneCoroutine.prototype.fold_17 = Element_0.prototype.fold_17;
  LazyStandaloneCoroutine.prototype.minusKey_18 = Element_0.prototype.minusKey_18;
  SchedulerTask.prototype.run_3 = Runnable.prototype.run_3;
  CoroutineDispatcher.prototype.get_31 = ContinuationInterceptor.prototype.get_31;
  CoroutineDispatcher.prototype.fold_17 = Element_0.prototype.fold_17;
  CoroutineDispatcher.prototype.minusKey_18 = ContinuationInterceptor.prototype.minusKey_18;
  CoroutineDispatcher.prototype.plus_17 = CoroutineContext.prototype.plus_17;
  EventLoop.prototype.plus_17 = CoroutineContext.prototype.plus_17;
  EventLoop.prototype.get_31 = ContinuationInterceptor.prototype.get_31;
  EventLoop.prototype.fold_17 = Element_0.prototype.fold_17;
  EventLoop.prototype.minusKey_18 = ContinuationInterceptor.prototype.minusKey_18;
  MainCoroutineDispatcher.prototype.plus_17 = CoroutineContext.prototype.plus_17;
  MainCoroutineDispatcher.prototype.get_31 = ContinuationInterceptor.prototype.get_31;
  MainCoroutineDispatcher.prototype.fold_17 = Element_0.prototype.fold_17;
  MainCoroutineDispatcher.prototype.minusKey_18 = ContinuationInterceptor.prototype.minusKey_18;
  Unconfined.prototype.plus_17 = CoroutineContext.prototype.plus_17;
  Unconfined.prototype.get_31 = ContinuationInterceptor.prototype.get_31;
  Unconfined.prototype.fold_17 = Element_0.prototype.fold_17;
  Unconfined.prototype.minusKey_18 = ContinuationInterceptor.prototype.minusKey_18;
  JsMainDispatcher.prototype.plus_17 = CoroutineContext.prototype.plus_17;
  JsMainDispatcher.prototype.get_31 = ContinuationInterceptor.prototype.get_31;
  JsMainDispatcher.prototype.fold_17 = Element_0.prototype.fold_17;
  JsMainDispatcher.prototype.minusKey_18 = ContinuationInterceptor.prototype.minusKey_18;
  UnconfinedEventLoop.prototype.plus_17 = CoroutineContext.prototype.plus_17;
  UnconfinedEventLoop.prototype.get_31 = ContinuationInterceptor.prototype.get_31;
  UnconfinedEventLoop.prototype.fold_17 = Element_0.prototype.fold_17;
  UnconfinedEventLoop.prototype.minusKey_18 = ContinuationInterceptor.prototype.minusKey_18;
  SetTimeoutBasedDispatcher.prototype.plus_17 = CoroutineContext.prototype.plus_17;
  SetTimeoutBasedDispatcher.prototype.get_31 = ContinuationInterceptor.prototype.get_31;
  SetTimeoutBasedDispatcher.prototype.fold_17 = Element_0.prototype.fold_17;
  SetTimeoutBasedDispatcher.prototype.minusKey_18 = ContinuationInterceptor.prototype.minusKey_18;
  NodeDispatcher.prototype.plus_17 = CoroutineContext.prototype.plus_17;
  NodeDispatcher.prototype.get_31 = ContinuationInterceptor.prototype.get_31;
  NodeDispatcher.prototype.fold_17 = Element_0.prototype.fold_17;
  NodeDispatcher.prototype.minusKey_18 = ContinuationInterceptor.prototype.minusKey_18;
  SetTimeoutDispatcher.prototype.plus_17 = CoroutineContext.prototype.plus_17;
  SetTimeoutDispatcher.prototype.get_31 = ContinuationInterceptor.prototype.get_31;
  SetTimeoutDispatcher.prototype.fold_17 = Element_0.prototype.fold_17;
  SetTimeoutDispatcher.prototype.minusKey_18 = ContinuationInterceptor.prototype.minusKey_18;
  WindowDispatcher.prototype.plus_17 = CoroutineContext.prototype.plus_17;
  WindowDispatcher.prototype.get_31 = ContinuationInterceptor.prototype.get_31;
  WindowDispatcher.prototype.fold_17 = Element_0.prototype.fold_17;
  WindowDispatcher.prototype.minusKey_18 = ContinuationInterceptor.prototype.minusKey_18;
  functionClasses = functionClasses$init$();
  buf = new ArrayBuffer(8);
  bufFloat64 = bufFloat64$init$();
  bufInt32 = bufInt32$init$();
  lowIndex = lowIndex$init$();
  highIndex = 1 - lowIndex | 0;
  ZERO = fromInt(0);
  ONE = fromInt(1);
  NEG_ONE = fromInt(-1);
  MAX_VALUE = new Long(-1, 2147483647);
  MIN_VALUE = new Long(0, -2147483648);
  TWO_PWR_24_ = fromInt(16777216);
  COMPLETING_ALREADY = new Symbol('COMPLETING_ALREADY');
  COMPLETING_WAITING_CHILDREN = new Symbol('COMPLETING_WAITING_CHILDREN');
  COMPLETING_RETRY = new Symbol('COMPLETING_RETRY');
  TOO_LATE_TO_CANCEL = new Symbol('TOO_LATE_TO_CANCEL');
  SEALED = new Symbol('SEALED');
  EMPTY_NEW = new Empty(false);
  EMPTY_ACTIVE = new Empty(true);
  UNDEFINED = new Symbol('UNDEFINED');
  REUSABLE_CLAIMED = new Symbol('REUSABLE_CLAIMED');
  counter = 0;
  DEBUG = false;
  main();
  return _;
}));
