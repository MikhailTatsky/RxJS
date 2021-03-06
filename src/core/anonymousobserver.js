    /**
     * Class to create an Observer instance from delegate-based implementations of the on* methods.
     */
    var AnonymousObserver = root.AnonymousObserver = (function () {
        inherits(AnonymousObserver, AbstractObserver);

        /**
         * @constructor
         *  Creates an observer from the specified OnNext, OnError, and OnCompleted actions.
         *  
         *  @param onNext Observer's OnNext action implementation.
         *  @param onError Observer's OnError action implementation.
         *  @param onCompleted Observer's OnCompleted action implementation.  
         */      
        function AnonymousObserver(onNext, onError, onCompleted) {
            AnonymousObserver.super_.constructor.call(this);
            this._onNext = onNext;
            this._onError = onError;
            this._onCompleted = onCompleted;
        }

        /**
         *  Calls the onNext action.
         *  
         *  @param value Next element in the sequence.   
         */     
        AnonymousObserver.prototype.next = function (value) {
            this._onNext(value);
        };

        /**
         *  Calls the onError action.
         *  
         *  @param error The error that has occurred.   
         */     
        AnonymousObserver.prototype.error = function (exception) {
            this._onError(exception);
        };

        /**
         *  Calls the onCompleted action.
         */        
        AnonymousObserver.prototype.completed = function () {
            this._onCompleted();
        };

        return AnonymousObserver;
    }());
