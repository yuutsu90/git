import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'
import tensorflow as tf

sess = tf.Session()
hello = tf.constant('Hello, TensorFlow')
print(sess.run(hello))
print(str(sess.run(hello), encoding='utf-8'))   # unicode --> utf-8