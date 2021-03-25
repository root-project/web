---
title: "TMVA PyTorch Interface is Out!"
layout: archive
author: Anirudh Dagar
---

What if we combine [PyTorch][PyTorch] and [TMVA][TMVA]? Ever wondered how ROOT utilizes powerful external MVA libraries making them easily accessible with a direct integration into the TMVA workflow? These interfaces between TMVA and Python frameworks are powered by the PyMVA backbone. All PyMVA methods provide the same plug-and-play mechanisms as TMVA.

With the release of *ROOT v6-24-00* we are excited to launch a brand new PyTorch Interface for TMVA.

[PyTorch][PyTorch] is a Python-based scientific package supporting a​utomatic differentiation.​ An ​open-source machine learning​ framework that accelerates the path from research prototyping to production deployment.

[PyTorch]: https://pytorch.org/
[TMVA]: https://root.cern/manual/tmva/

## Need for a PyTorch Interface?

TMVA already has a PyKeras interface which we all love, especially with Keras’ simple high-level tensorflow API. If your work involves some elementary experiments, Keras maybe the goto framework due to its plug & play spirit.

But things get interesting when one requires low level control and flexibility. That’s when the argument for Keras starts losing water. PyTorch on the other hand is amazing in terms of control, flexibility and raw power that it can provide to the user. It’s lower-level approach is better suited for the more mathematically-inclined users.

PyTorch is widely used​ among researchers and hence has a large community around it.

* ROOT + PyTorch: Allows to integrate ROOT methods which are good at handling HEP data and PyTorch for Machine Learning.

* Power & Flexibility: Neural Nets are not easy to develop using TMVA, as they require complex configuration strings. Even with PyKeras Interface, designing custom layers is not feasible. PyTorch offers the power and flexibility to achieve complex models with custom layers, optimizers, loss functions and training methodologies.

* Ease of Debugging: ​PyTorch models make use of dynamic computation graphs and are based on eager execution. This makes it easier to use debugging tools like pdb.

* Performance: PyTorch is extremely fast due to it’s highly optimized C++ backend.


Designing a simple neural net in PyTorch using a [PyTorch container][Containers] is extremely simple. Here we use [`nn.Sequential`][Sequential]:

```python
model = nn.Sequential()
model.add_module('linear_1', nn.Linear(in_features=4, out_features=64))
model.add_module('relu', nn.ReLU())
model.add_module('linear_2', nn.Linear(in_features=64, out_features=2))
model.add_module('softmax', nn.Softmax(dim=1))
```

See PyTorch [docs][docs] for more tutorials.

[Sequential]: https://pytorch.org/docs/stable/generated/torch.nn.Sequential.html
[Containers]: https://pytorch.org/docs/stable/nn.html#containers
[docs]: https://pytorch.org/docs/stable/index.html

As we mentioned earlier the power and flexibility comes in the form of designing custom layers as well writing a custom training loop.

```python
loss = torch.nn.MSELoss()
optimizer = torch.optim.SGD

def train(model, train_loader, val_loader, num_epochs,
          batch_size, optimizer, criterion, save_best, scheduler):
          ...

def predict(model, test_X, batch_size=32):
    ...
```

Defining a `load_model_custom_objects` dictionary with the keys `"optimizer"`, `"criterion"`, `"train_func"` and `"predict_func"` is the only extra step required when using the PyTorch Interface in TMVA. Everything else is native PyTorch or TMVA.

```python
load_model_custom_objects = {"optimizer": optimizer, "criterion": loss,
                             "train_func": train, "predict_func": predict}
```

In the end we book our TMVA method with `kPyTorch` type and call the training method.

```python
factory.BookMethod(dataloader, TMVA.Types.kPyTorch, 'PyTorch',
                   'H:!V:VarTransform=D,G:FilenameModel=model.pt:'
                   'NumEpochs=20:BatchSize=32')

factory.TrainAllMethods()
```


You can checkout a more detailed tutorial [here][TutorialPytorchTMVA] as well as some [examples][examples] in the ROOT repository. Read more about the development journey of TMVA PyTorch Interface at Anirudh's [GSoC blog][blog].

[examples]: https://github.com/root-project/root/tree/master/tutorials/tmva
[TutorialPytorchTMVA]: https://anirudhdagar.ml/gsoc/tmva/pytorch/root/2020/08/21/TMVA-PyTorch-Tutorial.html
[blog]: https://anirudhdagar.ml/gsoc/
